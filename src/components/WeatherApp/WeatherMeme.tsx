import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import { fetchGif } from '../../redux/slices/weatherSlice';
import { RootState, AppDispatch } from '../../redux/store';

const WeatherMeme: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentCondition = useSelector(
    (state: RootState) => state.weather.weatherData?.current.condition.text
  );
  const gifUrl = useSelector((state: RootState) => state.weather.gifUrl);

  useEffect(() => {
    if (currentCondition) {
      dispatch(fetchGif(currentCondition));
    }
  }, [currentCondition, dispatch]);

  return (
    <Box display='flex' justifyContent='center' alignItems='center' p={2}>
      {gifUrl && (
        <img
          src={gifUrl}
          alt={`Weather reaction for ${currentCondition}`}
          loading='lazy'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </Box>
  );
};

export default WeatherMeme;
