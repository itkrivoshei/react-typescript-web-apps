import React, { useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchGif } from '../../redux/slices/weatherSlice';

const WeatherMeme: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCondition = useAppSelector(
    (state) => state.weather.weatherData?.current.condition.text
  );
  const gifUrl = useAppSelector((state) => state.weather.gifUrl);
  const gifLoading = useAppSelector((state) => state.weather.gifLoading);

  useEffect(() => {
    if (currentCondition) {
      dispatch(fetchGif(currentCondition));
    }
  }, [currentCondition, dispatch]);

  if (gifLoading) {
    return <Skeleton variant='rounded' width='100%' height={160} />;
  }

  if (!gifUrl) {
    return null;
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' p={2}>
      <img
        src={gifUrl}
        alt={`Weather reaction for ${currentCondition}`}
        loading='lazy'
        style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }}
      />
    </Box>
  );
};

export default React.memo(WeatherMeme);
