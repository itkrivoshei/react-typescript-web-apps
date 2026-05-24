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

const initialState: WeatherState = {
  weatherData: null,
  region: Region.EU,
  gifUrl: null,
  weatherLoading: false,
  gifLoading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk<
  WeatherData,
  { city?: string; latitude?: number; longitude?: number },
  { rejectValue: string }
>('weather/fetchWeather', async (location, { rejectWithValue }) => {
  const query = location.city || `${location.latitude},${location.longitude}`;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  if (!apiKey) {
    return rejectWithValue('Weather API key is not configured');
  }

  try {
    const apiUrl = new URL('https://api.weatherapi.com/v1/current.json');
    apiUrl.searchParams.set('key', apiKey);
    apiUrl.searchParams.set('q', query);
    apiUrl.searchParams.set('aqi', 'yes');

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      return rejectWithValue('Failed to fetch weather data');
    }

    return await response.json();
  } catch {
    return rejectWithValue('Failed to fetch weather data');
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

    const data = await response.json();
    return data.data.length > 0 ? data.data[0].images.fixed_height.url : null;
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
