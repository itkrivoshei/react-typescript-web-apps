import React, { useState, ChangeEvent, FC, FormEvent } from 'react';
import { Box, IconButton, TextField, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useAppDispatch } from '../../redux/hooks';
import {
  toggleRegionFormat,
  fetchWeather,
} from '../../redux/slices/weatherSlice';

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

const SettingsMenu: FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState('');

  const handleToggleRegion = () => dispatch(toggleRegionFormat());

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (trimmedCity) {
      dispatch(fetchWeather({ city: trimmedCity }));
    }
  };

  return (
    <Box component='section' sx={panelSx}>
      <form onSubmit={handleSubmit}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <TextField
            type='search'
            value={city}
            onChange={handleCityChange}
            label='City'
            variant='outlined'
            size='small'
            sx={{
              minWidth: { xs: 0, sm: 220 },
              flex: 1,
              label: { color: '#4cc9f0' },
              '& .MuiOutlinedInput-root': {
                color: '#f8fafc',
                '& fieldset': {
                  borderColor: 'rgba(76, 201, 240, 0.4)',
                },
              },
            }}
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
