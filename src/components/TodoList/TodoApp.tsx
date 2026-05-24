import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Paper,
} from '@mui/material';
import '@fontsource/space-mono';

import { RootState } from '../../redux/store';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import lofiImage from '../../assets/TodoList/images/lofi_image.jpg';

const todoTheme = createTheme({
  palette: {
    primary: {
      main: '#6d5dfc',
    },
    secondary: {
      main: '#d8c7ff',
    },
    text: {
      primary: '#282a36',
    },
  },
  typography: {
    fontFamily: '"Space Mono", monospace',
  },
});

const TodoApp: React.FC = () => {
  const activeProject = useSelector((state: RootState) =>
    state.todo.projects.find(
      (project) => project.id === state.todo.activeProject
    )
  );

  return (
    <ThemeProvider theme={todoTheme}>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '100vw',
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(40, 42, 54, 0.3), rgba(40, 42, 54, 0.12)), url(${lofiImage})`,
          p: { xs: 1.5, sm: 3 },
        }}
      >
        <Paper
          component='main'
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: 940,
            width: '100%',
            minHeight: 500,
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: 'rgba(147, 129, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.28)',
            boxShadow: '0 24px 80px rgba(40, 42, 54, 0.28)',
          }}
        >
          <Box
            component='aside'
            sx={{
              width: { xs: '100%', md: '35%' },
              backgroundColor: 'rgba(216, 199, 255, 0.92)',
              p: { xs: 2, md: 3 },
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                mb: 1,
                color: '#282a36',
                textAlign: 'center',
                fontSize: 'clamp(2rem, 7vw, 3.2rem)',
              }}
            >
              Todo App
            </Typography>
            <AddProject />
            <ProjectList />
          </Box>
          <Box
            component='section'
            sx={{
              width: { xs: '100%', md: '65%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: { xs: 2, md: 3 },
              gap: 2,
            }}
          >
            <Typography variant='h3' color='#282a36'>
              Todos
            </Typography>
            <AddTodo />
            {activeProject && <TodoList todos={activeProject.todos} />}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TodoApp;
