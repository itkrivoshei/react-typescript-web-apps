import React from 'react';
import { List, Typography } from '@mui/material';

import { Todo } from '../../redux/slices/toDoSlice';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <Typography
        variant='body2'
        sx={{ color: 'rgba(40, 42, 54, 0.72)', textAlign: 'center' }}
      >
        No todos in this project yet.
      </Typography>
    );
  }

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
      }}
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default React.memo(TodoList);
