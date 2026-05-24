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

const dashboardFontFamily = [
  'Inter',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'sans-serif',
].join(', ');

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
    },
    primary: {
      main: '#f8fafc',
    },
  },
  typography: {
    fontFamily: dashboardFontFamily,
    h1: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
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
            'radial-gradient(circle at 12% 8%, rgba(76, 201, 240, 0.18), transparent 26rem), radial-gradient(circle at 88% 18%, rgba(167, 139, 250, 0.16), transparent 28rem), #0f172a',
        }}
      >
        <Container component='main' maxWidth='lg' sx={{ py: { xs: 4, md: 7 } }}>
          <Box
            component='header'
            sx={{
              maxWidth: 780,
              mx: 'auto',
              mb: { xs: 4, md: 6 },
              textAlign: 'center',
            }}
          >
            <Typography
              component='p'
              sx={{
                mb: 1.5,
                color: '#38bdf8',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              React · TypeScript · {projects.length} apps
            </Typography>
            <Typography
              variant='h1'
              sx={{
                mb: 2,
                color: 'primary.main',
                fontSize: 'clamp(2.75rem, 7vw, 5.75rem)',
                letterSpacing: '-0.06em',
                lineHeight: 0.95,
              }}
            >
              Web Apps Collection
            </Typography>
            <Typography
              component='p'
              sx={{
                mx: 'auto',
                maxWidth: 620,
                color: 'rgba(226, 232, 240, 0.72)',
                fontSize: { xs: '0.98rem', md: '1.08rem' },
                lineHeight: 1.7,
              }}
            >
              A compact launcher for small frontend apps, each with its own
              visual direction and shared React/TypeScript setup.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent='center'>
            {projects.map((project) => (
              <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    position: 'relative',
                    height: 212,
                    backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.92)), url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(226, 232, 240, 0.12)',
                    borderRadius: 3,
                    boxShadow: '0 18px 52px rgba(2, 6, 23, 0.34)',
                    overflow: 'hidden',
                    transition:
                      'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: project.accent,
                      zIndex: 1,
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(226, 232, 240, 0.24)',
                      boxShadow: `0 24px 70px rgba(2, 6, 23, 0.46), 0 0 0 1px ${project.accent}`,
                    },
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
                      alignItems: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        variant='h3'
                        sx={{
                          color: 'primary.main',
                          fontSize: '1.35rem',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.12,
                          textShadow: '0 2px 14px rgba(0, 0, 0, 0.82)',
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Box
                        sx={{
                          width: 36,
                          height: 2,
                          mt: 1.2,
                          backgroundColor: project.accent,
                        }}
                      />
                    </Box>
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
