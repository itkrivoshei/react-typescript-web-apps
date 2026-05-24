import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Checkbox,
  Paper,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { deleteTodo, editTodo, toggleTodo } from '../../redux/slices/toDoSlice';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleEdit = () => setIsEditing(true);
  const handleToggleCompletion = () => dispatch(toggleTodo(todo.id));

  const handleSave = () => {
    const trimmedName = newName.trim();

    if (trimmedName) {
      dispatch(editTodo({ todoId: todo.id, newText: trimmedName }));
      setIsEditing(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewName(event.target.value);

  return (
    <Box component='li'>
      {isEditing ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            margin: 'auto',
          }}
        >
          <TextField
            value={newName}
            size='small'
            onChange={handleChange}
            fullWidth
          />
          <IconButton onClick={handleSave} aria-label='Save todo'>
            <SaveIcon />
          </IconButton>
        </Box>
      ) : (
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            minHeight: 52,
            px: 1,
            borderRadius: 2,
            border: '1px solid rgba(40, 42, 54, 0.12)',
            backgroundColor: 'rgba(200, 182, 255, 0.88)',
            opacity: todo.completed ? 0.58 : 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Checkbox
              checked={!!todo.completed}
              onChange={handleToggleCompletion}
              inputProps={{ 'aria-label': `Mark ${todo.text} as complete` }}
            />
            <Typography
              variant='body1'
              sx={{
                wordBreak: 'break-word',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <IconButton onClick={handleEdit} aria-label={`Edit ${todo.text}`}>
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              aria-label={`Delete ${todo.text}`}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
export default TodoItem;
