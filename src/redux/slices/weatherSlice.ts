import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherGifUrl } from '../../components/WeatherApp/weatherGif';

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
    wind_gust_kph: number;
    wind_gust_mph: number;
    humidity: number;
    pressure_mb: number;
    precipitation_mm: number;
    cloud_cover: number;
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

interface ReverseGeocodingResponse {
  city?: string;
  locality?: string;
  principalSubdivision?: string;
  countryName?: string;
}

interface OpenMeteoResponse {
  timezone?: string;
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    cloud_cover: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_gusts_10m: number;
    weather_code: number;
  };
}

type WeatherLocation = {
  city?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  country?: string;
};

type ResolvedLocation = {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
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
  weatherCodeLabels[weatherCode] ?? 'Weather conditions';

const getCoordinateLabel = (latitude: number, longitude: number) =>
  `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

const getCoordinatesFromCity = async (
  city: string
): Promise<GeocodingResult> => {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', city);
  url.searchParams.set('count', '1');
  url.searchParams.set('language', 'en');
  url.searchParams.set('format', 'json');

  const response = await fetch(url.toString());

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

const getPlaceFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<Pick<ResolvedLocation, 'name' | 'country'>> => {
  const url = new URL(
    'https://api.bigdatacloud.net/data/reverse-geocode-client'
  );
  url.searchParams.set('latitude', String(latitude));
  url.searchParams.set('longitude', String(longitude));
  url.searchParams.set('localityLanguage', 'en');

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('Failed to resolve location name');
  }

  const data = (await response.json()) as ReverseGeocodingResponse;
  const name = data.city || data.locality || data.principalSubdivision;

  if (!name) {
    throw new Error('Location name was not found');
  }

  return {
    name,
    country: data.countryName ?? '',
  };
};

const resolveLocation = async (
  location: WeatherLocation
): Promise<ResolvedLocation> => {
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

  const providedName = location.name?.trim();

  if (providedName) {
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      name: providedName,
      country: location.country?.trim() ?? '',
    };
  }

  try {
    const place = await getPlaceFromCoordinates(
      location.latitude,
      location.longitude
    );

    return {
      latitude: location.latitude,
      longitude: location.longitude,
      name: place.name,
      country: place.country,
    };
  } catch {
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      name: getCoordinateLabel(location.latitude, location.longitude),
      country: '',
    };
  }
};

const mapOpenMeteoToWeatherData = (
  data: OpenMeteoResponse,
  location: ResolvedLocation
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
      wind_gust_kph: current.wind_gusts_10m,
      wind_gust_mph: kphToMph(current.wind_gusts_10m),
      humidity: current.relative_humidity_2m,
      pressure_mb: current.surface_pressure,
      precipitation_mm: current.precipitation,
      cloud_cover: current.cloud_cover,
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
    const url = new URL('https://api.open-meteo.com/v1/forecast');

    url.searchParams.set('latitude', String(resolvedLocation.latitude));
    url.searchParams.set('longitude', String(resolvedLocation.longitude));
    url.searchParams.set(
      'current',
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_gusts_10m'
    );
    url.searchParams.set('timezone', 'auto');

    const response = await fetch(url.toString());

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
  try {
    return await getWeatherGifUrl(condition);
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
        state.gifUrl = null;
        state.gifLoading = true;
      })
      .addCase(fetchGif.fulfilled, (state, action) => {
        state.gifUrl = action.payload;
        state.gifLoading = false;
      })
      .addCase(fetchGif.rejected, (state) => {
        state.gifUrl = null;
        state.gifLoading = false;
      });
  },
});

export const { toggleRegionFormat } = weatherSlice.actions;
export default weatherSlice.reducer;
