import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from '@mui/material';
import '@fontsource/gideon-roman';

interface Project {
  path: string;
  name: string;
  imageUrl: string;
  accent: string;
}

const mediaBaseUrl =
  'https://raw.githubusercontent.com/itkrivoshei/react-typescript-web-apps/main/media';

const projects: Project[] = [
  {
    path: '/WeatherApp',
    name: 'Weather App',
    imageUrl: `${mediaBaseUrl}/WeatherApp.gif`,
    accent: '#4cc9f0',
  },
  {
    path: '/TodoApp',
    name: 'Todo App',
    imageUrl: `${mediaBaseUrl}/TodoList.gif`,
    accent: '#c8b6ff',
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    imageUrl: `${mediaBaseUrl}/Calculator.gif`,
    accent: '#d6c4a8',
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',
    imageUrl: `${mediaBaseUrl}/TicTacToe.gif`,
    accent: '#f97316',
  },
  {
    path: '/EtchASketch',
    name: 'Etch a Sketch',
    imageUrl: `${mediaBaseUrl}/EtchASketch.gif`,
    accent: '#ef4444',
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',
    imageUrl: `${mediaBaseUrl}/Library.gif`,
    accent: '#facc15',
  },
  {
    path: '/SignUpForm',
    name: 'Sign-up Form',
    imageUrl: `${mediaBaseUrl}/SignUpForm.gif`,
    accent: '#38bdf8',
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',
    imageUrl: `${mediaBaseUrl}/DrumKit.gif`,
    accent: '#fb7185',
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',
    imageUrl: `${mediaBaseUrl}/RockPaperScissors.gif`,
    accent: '#22c55e',
  },
  {
    path: '/DashLanding',
    name: 'Dashboard',
    imageUrl: `${mediaBaseUrl}/Dashboard.gif`,
    accent: '#a78bfa',
  },
  {
    path: '/Landing',
    name: 'Landing',
    imageUrl: `${mediaBaseUrl}/Landing.gif`,
    accent: '#60a5fa',
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    imageUrl: `${mediaBaseUrl}/Restaurant.gif`,
    accent: '#f59e0b',
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',
    imageUrl: `${mediaBaseUrl}/Recipes.gif`,
    accent: '#84cc16',
  },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111827',
    },
    primary: {
      main: '#f8fafc',
    },
  },
  typography: {
    fontFamily: 'Gideon Roman, Arial',
  },
});

const Dashboard: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at top left, rgba(76, 201, 240, 0.16), transparent 32rem), #111827',
        }}
      >
        <Container component='main' maxWidth='lg' sx={{ py: { xs: 4, md: 7 } }}>
          <Typography
            variant='h1'
            gutterBottom
            align='center'
            sx={{
              mb: 1,
              color: 'primary.main',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              letterSpacing: '0.04em',
            }}
          >
            React TypeScript Web Apps
          </Typography>
          <Typography
            align='center'
            sx={{
              mb: 5,
              color: 'rgba(248, 250, 252, 0.68)',
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Small frontend apps with separate visual directions and one shared
            launcher.
          </Typography>
          <Grid container spacing={3} justifyContent='center'>
            {projects.map((project) => (
              <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: 208,
                    backgroundImage: `linear-gradient(180deg, rgba(17, 24, 39, 0.05), rgba(17, 24, 39, 0.88)), url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(248, 250, 252, 0.12)',
                    borderTop: `3px solid ${project.accent}`,
                    borderRadius: 3,
                    boxShadow: '0 18px 50px rgba(0, 0, 0, 0.28)',
                    transition:
                      'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 22px 60px rgba(0, 0, 0, 0.38), 0 0 0 1px ${project.accent}`,
                    },
                    overflow: 'hidden',
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={project.path}
                    aria-label={`Open ${project.name}`}
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Typography
                      variant='h3'
                      sx={{
                        width: '100%',
                        color: 'primary.main',
                        textAlign: 'center',
                        textShadow: '0 2px 14px rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      {project.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
