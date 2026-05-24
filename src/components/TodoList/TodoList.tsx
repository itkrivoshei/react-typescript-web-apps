import React from 'react';
import { List } from '@mui/material';

import { Todo } from '../../redux/slices/toDoSlice';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
