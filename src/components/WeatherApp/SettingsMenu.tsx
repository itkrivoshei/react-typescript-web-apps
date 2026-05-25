import React, { useEffect, useState, FC, FormEvent } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Button,
  Stack,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useAppDispatch } from '../../redux/hooks';
import {
  toggleRegionFormat,
  fetchWeather,
} from '../../redux/slices/weatherSlice';

type CitySuggestion = {
  id: number;
  name: string;
  country?: string;
  admin1?: string;
  latitude: number;
  longitude: number;
};

type GeocodingResponse = {
  results?: CitySuggestion[];
};

const panelSx = {
  position: 'absolute',
  top: 16,
  left: 16,
  right: { xs: 16, sm: 'auto' },
  zIndex: 1,
  p: 1.5,
  border: '1px solid rgba(76, 201, 240, 0.32)',
  borderRadius: 2,
  backgroundColor: 'rgba(10, 15, 34, 0.72)',
  backdropFilter: 'blur(10px)',
};

const getCityLabel = (city: CitySuggestion) =>
  [city.name, city.admin1, city.country].filter(Boolean).join(', ');

const SettingsMenu: FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState<CitySuggestion | null>(null);
  const [cityOptions, setCityOptions] = useState<CitySuggestion[]>([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);

  useEffect(() => {
    const query = city.trim();

    if (query.length < 2) {
      setCityOptions([]);
      setSuggestionsLoading(false);
      return undefined;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      const apiUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
      apiUrl.searchParams.set('name', query);
      apiUrl.searchParams.set('count', '6');
      apiUrl.searchParams.set('language', 'en');
      apiUrl.searchParams.set('format', 'json');

      try {
        setSuggestionsLoading(true);
        const response = await fetch(apiUrl.toString(), {
          signal: controller.signal,
        });

        if (!response.ok) {
          setCityOptions([]);
          return;
        }

        const data = (await response.json()) as GeocodingResponse;
        setCityOptions(data.results ?? []);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          setCityOptions([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setSuggestionsLoading(false);
        }
      }
    }, 250);

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [city]);

  const handleToggleRegion = () => dispatch(toggleRegionFormat());

  const handleCityInputChange = (
    _event: React.SyntheticEvent,
    value: string
  ) => {
    setCity(value);

    if (selectedCity && value !== getCityLabel(selectedCity)) {
      setSelectedCity(null);
    }
  };

  const handleCitySelect = (
    _event: React.SyntheticEvent,
    value: CitySuggestion | string | null
  ) => {
    if (!value || typeof value === 'string') {
      setSelectedCity(null);
      return;
    }

    setSelectedCity(value);
    setCity(getCityLabel(value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (selectedCity) {
      dispatch(
        fetchWeather({
          latitude: selectedCity.latitude,
          longitude: selectedCity.longitude,
          name: selectedCity.name,
          country: selectedCity.country,
        })
      );
      return;
    }

    if (trimmedCity) {
      dispatch(fetchWeather({ city: trimmedCity }));
    }
  };

  return (
    <Box component='section' sx={panelSx}>
      <form onSubmit={handleSubmit}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Autocomplete
            freeSolo
            options={cityOptions}
            loading={suggestionsLoading}
            inputValue={city}
            value={selectedCity}
            onInputChange={handleCityInputChange}
            onChange={handleCitySelect}
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : getCityLabel(option)
            }
            filterOptions={(options) => options}
            sx={{ minWidth: { xs: 0, sm: 260 }, flex: 1 }}
            renderInput={(params) => (
              <TextField
                {...params}
                type='search'
                label='City'
                variant='outlined'
                size='small'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {suggestionsLoading ? (
                        <CircularProgress color='inherit' size={18} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
                sx={{
                  label: { color: '#4cc9f0' },
                  '& .MuiOutlinedInput-root': {
                    color: '#f8fafc',
                    '& fieldset': {
                      borderColor: 'rgba(76, 201, 240, 0.4)',
                    },
                  },
                }}
              />
            )}
          />
          <IconButton
            aria-label='Search weather by city'
            type='submit'
            sx={{ color: '#4cc9f0' }}
          >
            <SearchIcon />
          </IconButton>
          <Button
            onClick={handleToggleRegion}
            variant='outlined'
            size='small'
            sx={{ color: '#4cc9f0', borderColor: 'rgba(76, 201, 240, 0.4)' }}
          >
            Unit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default React.memo(SettingsMenu);
