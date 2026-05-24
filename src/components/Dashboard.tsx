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
} from '@mui/material';
import '@fontsource/gideon-roman';

interface Project {
  path: string;
  name: string;
  imageUrl: string;
}

const mediaBaseUrl =
  'https://raw.githubusercontent.com/itkrivoshei/react-typescript-web-apps/main/media';

const projects: Project[] = [
  {
    path: '/WeatherApp',
    name: 'Weather App',
    imageUrl: `${mediaBaseUrl}/WeatherApp.gif`,
  },
  {
    path: '/TodoApp',
    name: 'Todo App',
    imageUrl: `${mediaBaseUrl}/TodoList.gif`,
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    imageUrl: `${mediaBaseUrl}/Calculator.gif`,
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',
    imageUrl: `${mediaBaseUrl}/TicTacToe.gif`,
  },
  {
    path: '/EtchASketch',
    name: 'Etch a Sketch',
    imageUrl: `${mediaBaseUrl}/EtchASketch.gif`,
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',
    imageUrl: `${mediaBaseUrl}/Library.gif`,
  },
  {
    path: '/SignUpForm',
    name: 'Sign-up Form',
    imageUrl: `${mediaBaseUrl}/SignUpForm.gif`,
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',
    imageUrl: `${mediaBaseUrl}/DrumKit.gif`,
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',
    imageUrl: `${mediaBaseUrl}/RockPaperScissors.gif`,
  },
  {
    path: '/DashLanding',
    name: 'Dashboard',
    imageUrl: `${mediaBaseUrl}/Dashboard.gif`,
  },
  {
    path: '/Landing',
    name: 'Landing',
    imageUrl: `${mediaBaseUrl}/Landing.gif`,
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    imageUrl: `${mediaBaseUrl}/Restaurant.gif`,
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',
    imageUrl: `${mediaBaseUrl}/Recipes.gif`,
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
      <Container component='main' maxWidth='lg' sx={{ py: 6 }}>
        <Typography
          variant='h1'
          gutterBottom
          align='center'
          sx={{
            mb: 5,
            color: 'primary.main',
            fontSize: 'clamp(2.75rem, 8vw, 6rem)',
            letterSpacing: '0.04em',
          }}
        >
          React TypeScript Web Apps
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project) => (
            <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: 200,
                  backgroundImage: `linear-gradient(180deg, rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.82)), url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(248, 250, 252, 0.12)',
                  transition:
                    'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
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
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
