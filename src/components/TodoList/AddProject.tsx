import React, { useState } from 'react';

import { Button, TextField, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/slices/toDoSlice';

const AddProject: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle) {
      dispatch(addProject(trimmedTitle));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
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
    </form>
  );
};

export default AddProject;
