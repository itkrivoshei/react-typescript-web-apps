import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/orbitron';

import cosmosImage from '../../assets/WeatherApp/images/cosmos_image.jpg';
import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron, sans-serif',
  },
});

const WeatherApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='main'
        sx={{
          width: '100vw',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'auto',
          backgroundImage: `linear-gradient(135deg, rgba(10, 15, 34, 0.78), rgba(26, 26, 46, 0.55)), url(${cosmosImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <SettingsMenu />
        <MainWeatherDisplay />
      </Box>
    </ThemeProvider>
  );
};

export default WeatherApp;
