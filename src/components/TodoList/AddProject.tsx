import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

import { useAppDispatch } from '../../redux/hooks';
import { addProject } from '../../redux/slices/toDoSlice';

const AddProject: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle) {
      dispatch(addProject(trimmedTitle));
      setTitle('');
    }
  };

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          margin: 'auto',
        }}
      >
        <TextField
          label='Project Title'
          variant='outlined'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          fullWidth
        />
        <Button variant='contained' color='primary' type='submit'>
          Add Project
        </Button>
      </Box>
    </Box>
  );
};

export default AddProject;
