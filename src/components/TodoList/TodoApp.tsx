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
      main: '#7161ef',
    },
    secondary: {
      main: '#cdb4dbff',
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
          backgroundImage: `url(${lofiImage})`,
          p: 2,
        }}
      >
        <Paper
          component='main'
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: 900,
            width: '100%',
            minHeight: 480,
            backgroundColor: '#9381ff',
            opacity: 0.93,
            p: 2,
          }}
        >
          <Box
            component='aside'
            sx={{
              width: { xs: '100%', md: '35%' },
              backgroundColor: 'secondary.main',
              p: 2,
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                color: '#282A36',
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
              pl: { xs: 0, md: 2 },
              pt: { xs: 2, md: 0 },
              gap: 2,
            }}
          >
            <Typography variant='h3' color={'#282A36'}>
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
