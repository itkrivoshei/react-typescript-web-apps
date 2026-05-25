import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Paper,
  Chip,
  Stack,
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
  shape: {
    borderRadius: 10,
  },
});

const TodoApp: React.FC = () => {
  const projects = useSelector((state: RootState) => state.todo.projects);
  const activeProject = useSelector((state: RootState) =>
    state.todo.projects.find(
      (project) => project.id === state.todo.activeProject
    )
  );
  const completedCount = activeProject?.todos.filter(
    (todo) => todo.completed
  ).length;

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
          backgroundImage: `linear-gradient(135deg, rgba(40, 42, 54, 0.46), rgba(40, 42, 54, 0.18)), url(${lofiImage})`,
          p: { xs: 1.5, sm: 3 },
        }}
      >
        <Paper
          component='main'
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: 980,
            width: '100%',
            minHeight: 540,
            borderRadius: 3,
            overflow: 'hidden',
            backgroundColor: 'rgba(147, 129, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.28)',
            boxShadow: '0 24px 80px rgba(40, 42, 54, 0.34)',
          }}
        >
          <Box
            component='aside'
            sx={{
              width: { xs: '100%', md: '34%' },
              background:
                'linear-gradient(180deg, rgba(232, 222, 255, 0.96), rgba(216, 199, 255, 0.9))',
              p: { xs: 2, md: 3 },
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              borderRight: {
                xs: 0,
                md: '1px solid rgba(40, 42, 54, 0.12)',
              },
            }}
          >
            <Box>
              <Typography
                variant='overline'
                sx={{ color: 'rgba(40, 42, 54, 0.66)', fontWeight: 700 }}
              >
                Lofi task board
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  color: '#282a36',
                  fontSize: 'clamp(2.2rem, 7vw, 3.35rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.08em',
                }}
              >
                Todo App
              </Typography>
            </Box>
            <AddProject />
            <ProjectList />
          </Box>
          <Box
            component='section'
            sx={{
              width: { xs: '100%', md: '66%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              p: { xs: 2, md: 3 },
              gap: 2,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent='space-between'
              alignItems={{ xs: 'flex-start', sm: 'center' }}
            >
              <Box>
                <Typography
                  variant='overline'
                  sx={{ color: 'rgba(40, 42, 54, 0.64)', fontWeight: 700 }}
                >
                  Active project
                </Typography>
                <Typography
                  variant='h3'
                  sx={{
                    color: '#282a36',
                    fontSize: 'clamp(1.7rem, 5vw, 2.4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.05em',
                  }}
                >
                  {activeProject?.title ?? 'Todos'}
                </Typography>
              </Box>
              <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
                <Chip
                  label={`${projects.length} projects`}
                  size='small'
                  sx={{
                    backgroundColor: 'rgba(40, 42, 54, 0.1)',
                    color: '#282a36',
                    fontWeight: 700,
                  }}
                />
                <Chip
                  label={`${completedCount ?? 0}/${
                    activeProject?.todos.length ?? 0
                  } done`}
                  size='small'
                  sx={{
                    backgroundColor: 'rgba(40, 42, 54, 0.1)',
                    color: '#282a36',
                    fontWeight: 700,
                  }}
                />
              </Stack>
            </Stack>
            <AddTodo />
            {activeProject && <TodoList todos={activeProject.todos} />}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TodoApp;
