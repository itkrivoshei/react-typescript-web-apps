import React, { useEffect, useRef } from 'react';
import { Box, Typography, Divider, Paper, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import WeatherMeme from './WeatherMeme';

const cardSx = {
  width: 'min(92vw, 500px)',
  p: { xs: 2.5, md: 3 },
  mt: { xs: 12, sm: 8 },
  border: '1px solid rgba(76, 201, 240, 0.22)',
  borderRadius: 4,
  backgroundColor: 'rgba(10, 15, 34, 0.78)',
  boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
  backdropFilter: 'blur(12px)',
};

const dividerSx = { my: 2, backgroundColor: 'rgba(114, 9, 183, 0.75)' };
const metricSx = {
  p: 1.25,
  border: '1px solid rgba(76, 201, 240, 0.16)',
  borderRadius: 2,
  backgroundColor: 'rgba(76, 201, 240, 0.06)',
};

const formatLocalTime = (localTime: string): string => {
  const date = new Date(localTime);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${hours}:${minutes} | ${day}/${month}/${date.getFullYear()}`;
};

const WeatherMetric = ({ label, value }: { label: string; value: string }) => (
  <Box sx={metricSx}>
    <Typography variant='caption' color='rgba(248, 250, 252, 0.62)'>
      {label}
    </Typography>
    <Typography variant='body2' color='#4cc9f0'>
      {value}
    </Typography>
  </Box>
);

const MainWeatherDisplay: React.FC = () => {
  const dispatch = useAppDispatch();
  const hasRequestedLocation = useRef(false);
  const { weatherData, weatherLoading, error, region } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (hasRequestedLocation.current || weatherData) return;
    hasRequestedLocation.current = true;
    if (!('geolocation' in navigator)) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch(fetchWeather({ latitude, longitude }));
    });
  }, [dispatch, weatherData]);

  const renderStatusCard = (
    message: string,
    tone: 'info' | 'error' = 'info'
  ) => (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' px={2}>
      <Paper sx={cardSx}>
        <Typography variant='h4' textAlign='center' color={tone === 'error' ? '#fb7185' : '#4cc9f0'}>
          {message}
        </Typography>
      </Paper>
    </Box>
  );

  if (error) return renderStatusCard(error, 'error');
  if (weatherLoading) return renderStatusCard('Loading weather data');
  if (!weatherData) return renderStatusCard('Search by city or allow location access');

  const displayTemperature = (temp: number) => `${temp}°${region === 'EU' ? 'C' : 'F'}`;
  const displayWindSpeed = (speed: number) => `${speed} ${region === 'EU' ? 'kph' : 'mph'}`;
  const windSpeed = region === 'EU' ? weatherData.current.wind_kph : weatherData.current.wind_mph;
  const windGust = region === 'EU' ? weatherData.current.wind_gust_kph : weatherData.current.wind_gust_mph;

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' px={2}>
      <Paper elevation={3} sx={cardSx}>
        <Stack spacing={2} alignItems='center' textAlign='center'>
          <Box>
            <Typography variant='h4' color='#f72585'>
              {weatherData.location.name}
              {weatherData.location.country ? `, ${weatherData.location.country}` : ''}
            </Typography>
            <Typography variant='body2' color='#4cc9f0'>
              {formatLocalTime(weatherData.location.localtime)}
            </Typography>
          </Box>

          <Divider flexItem sx={dividerSx} />

          <Box>
            <Typography variant='h2' color='#f72585'>
              {displayTemperature(region === 'EU' ? weatherData.current.temp_c : weatherData.current.temp_f)}
            </Typography>
            <Typography variant='body2' color='#4cc9f0'>
              Feels: {displayTemperature(region === 'EU' ? weatherData.current.feelslike_c : weatherData.current.feelslike_f)}
            </Typography>
          </Box>

          <Divider flexItem sx={dividerSx} />

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' }, gap: 1, width: '100%' }}>
            <WeatherMetric label='Wind' value={displayWindSpeed(windSpeed)} />
            <WeatherMetric label='Gusts' value={displayWindSpeed(windGust)} />
            <WeatherMetric label='Humidity' value={`${weatherData.current.humidity}%`} />
            <WeatherMetric label='Clouds' value={`${weatherData.current.cloud_cover}%`} />
            <WeatherMetric label='Pressure' value={`${Math.round(weatherData.current.pressure_mb)} mb`} />
            <WeatherMetric label='Precipitation' value={`${weatherData.current.precipitation_mm} mm`} />
          </Box>

          <Divider flexItem sx={dividerSx} />
          <WeatherMeme />
          <Typography variant='body2' color='#4cc9f0'>
            Condition: {weatherData.current.condition.text}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default React.memo(MainWeatherDisplay);
