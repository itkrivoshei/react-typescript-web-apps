import React, { useState } from 'react';

import { Button, TextField, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/toDoSlice';

const AddTodo: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput) {
      dispatch(addTodo(trimmedInput));
      setInput('');
    }
  };

  return (
    <Box component='form' onSubmit={handleAddTodo} sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1.5,
          width: '100%',
          maxWidth: 520,
          margin: 'auto',
        }}
      >
        <TextField
          label='Enter Todo'
          variant='outlined'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button variant='contained' color='primary' type='submit'>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddTodo;
