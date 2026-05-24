import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export enum Region {
  EU = 'EU',
  US = 'US',
}

export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    air_quality: {
      'us-epa-index': number;
    };
    condition: {
      text: string;
    };
  };
}

interface WeatherState {
  weatherData: WeatherData | null;
  region: Region;
  gifUrl: string | null;
  weatherLoading: boolean;
  gifLoading: boolean;
  error: string | null;
}

interface GiphyResponse {
  data: Array<{
    images: {
      fixed_height: {
        url: string;
      };
    };
  }>;
}

interface GeocodingResult {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  timezone?: string;
}

interface GeocodingResponse {
  results?: GeocodingResult[];
}

interface OpenMeteoResponse {
  timezone?: string;
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

type WeatherLocation = {
  city?: string;
  latitude?: number;
  longitude?: number;
};

const initialState: WeatherState = {
  weatherData: null,
  region: Region.EU,
  gifUrl: null,
  weatherLoading: false,
  gifLoading: false,
  error: null,
};

const weatherCodeLabels: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

const celsiusToFahrenheit = (temperature: number) =>
  Math.round(((temperature * 9) / 5 + 32) * 10) / 10;

const kphToMph = (speed: number) => Math.round(speed * 0.621371 * 10) / 10;

const getWeatherCondition = (weatherCode: number) =>
  weatherCodeLabels[weatherCode] ?? 'Current weather';

const getCoordinatesFromCity = async (city: string): Promise<GeocodingResult> => {
  const apiUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
  apiUrl.searchParams.set('name', city);
  apiUrl.searchParams.set('count', '1');
  apiUrl.searchParams.set('language', 'en');
  apiUrl.searchParams.set('format', 'json');

  const response = await fetch(apiUrl.toString());

  if (!response.ok) {
    throw new Error('Failed to find city');
  }

  const data = (await response.json()) as GeocodingResponse;
  const result = data.results?.[0];

  if (!result) {
    throw new Error('City was not found');
  }

  return result;
};

const resolveLocation = async (location: WeatherLocation) => {
  const city = location.city?.trim();

  if (city) {
    const result = await getCoordinatesFromCity(city);
    return {
      latitude: result.latitude,
      longitude: result.longitude,
      name: result.name,
      country: result.country ?? '',
    };
  }

  if (location.latitude === undefined || location.longitude === undefined) {
    throw new Error('Location is missing');
  }

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    name: 'Current location',
    country: '',
  };
};

const mapOpenMeteoToWeatherData = (
  data: OpenMeteoResponse,
  location: Awaited<ReturnType<typeof resolveLocation>>
): WeatherData => {
  const current = data.current;

  return {
    location: {
      name: location.name,
      country: location.country,
      localtime: current.time,
    },
    current: {
      temp_c: current.temperature_2m,
      temp_f: celsiusToFahrenheit(current.temperature_2m),
      feelslike_c: current.apparent_temperature,
      feelslike_f: celsiusToFahrenheit(current.apparent_temperature),
      wind_kph: current.wind_speed_10m,
      wind_mph: kphToMph(current.wind_speed_10m),
      humidity: current.relative_humidity_2m,
      air_quality: {
        'us-epa-index': 0,
      },
      condition: {
        text: getWeatherCondition(current.weather_code),
      },
    },
  };
};

export const fetchWeather = createAsyncThunk<
  WeatherData,
  WeatherLocation,
  { rejectValue: string }
>('weather/fetchWeather', async (location, { rejectWithValue }) => {
  try {
    const resolvedLocation = await resolveLocation(location);
    const apiUrl = new URL('https://api.open-meteo.com/v1/forecast');

    apiUrl.searchParams.set('latitude', String(resolvedLocation.latitude));
    apiUrl.searchParams.set('longitude', String(resolvedLocation.longitude));
    apiUrl.searchParams.set(
      'current',
      'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m'
    );
    apiUrl.searchParams.set('timezone', 'auto');

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      return rejectWithValue('Failed to fetch weather data');
    }

    const data = (await response.json()) as OpenMeteoResponse;
    return mapOpenMeteoToWeatherData(data, resolvedLocation);
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch weather data'
    );
  }
});

export const fetchGif = createAsyncThunk<
  string | null,
  string,
  { rejectValue: string }
>('weather/fetchGif', async (condition, { rejectWithValue }) => {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const apiUrl = new URL('https://api.giphy.com/v1/gifs/search');
    apiUrl.searchParams.set('api_key', apiKey);
    apiUrl.searchParams.set('q', `${condition} weather`);
    apiUrl.searchParams.set('limit', '1');

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      return rejectWithValue('Failed to fetch GIF');
    }

    const data = (await response.json()) as GiphyResponse;
    return data.data[0]?.images.fixed_height.url ?? null;
  } catch {
    return rejectWithValue('Failed to fetch GIF');
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleRegionFormat: (state) => {
      state.region = state.region === Region.EU ? Region.US : Region.EU;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherLoading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.weatherLoading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.error = action.payload ?? 'Failed to fetch weather data';
        state.weatherLoading = false;
      })
      .addCase(fetchGif.pending, (state) => {
        state.gifLoading = true;
      })
      .addCase(fetchGif.fulfilled, (state, action) => {
        state.gifUrl = action.payload;
        state.gifLoading = false;
      })
      .addCase(fetchGif.rejected, (state) => {
        state.gifLoading = false;
      });
  },
});

export const { toggleRegionFormat } = weatherSlice.actions;
export default weatherSlice.reducer;
