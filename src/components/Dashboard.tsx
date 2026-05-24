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
  'https://github.com/itkrivoshei/react-typescript-web-apps/blob/main/media';

const projects: Project[] = [
  {
    path: '/WeatherApp',
    name: 'Weather App',
    imageUrl: `${mediaBaseUrl}/WeatherApp.gif?raw=true`,
  },
  {
    path: '/TodoApp',
    name: 'Todo App',
    imageUrl: `${mediaBaseUrl}/TodoList.gif?raw=true`,
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    imageUrl: `${mediaBaseUrl}/Calculator.gif?raw=true`,
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',
    imageUrl: `${mediaBaseUrl}/TicTacToe.gif?raw=true`,
  },
  {
    path: '/EtchASketch',
    name: 'Etch a Sketch',
    imageUrl: `${mediaBaseUrl}/EtchASketch.gif?raw=true`,
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',
    imageUrl: `${mediaBaseUrl}/Library.gif?raw=true`,
  },
  {
    path: '/SignUpForm',
    name: 'Sign-up Form',
    imageUrl: `${mediaBaseUrl}/SignUpForm.gif?raw=true`,
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',
    imageUrl: `${mediaBaseUrl}/DrumKit.gif?raw=true`,
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',
    imageUrl: `${mediaBaseUrl}/RockPaperScissors.gif?raw=true`,
  },
  {
    path: '/DashLanding',
    name: 'Dashboard',
    imageUrl: `${mediaBaseUrl}/Dashboard.gif?raw=true`,
  },
  {
    path: '/Landing',
    name: 'Landing',
    imageUrl: `${mediaBaseUrl}/Landing.gif?raw=true`,
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    imageUrl: `${mediaBaseUrl}/Restaurant.gif?raw=true`,
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',
    imageUrl: `${mediaBaseUrl}/Recipes.gif?raw=true`,
  },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111827',
    },
    primary: {
      main: '#ffffff',
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
      <Container maxWidth='lg' sx={{ padding: '48px 0' }}>
        <Typography
          variant='h1'
          gutterBottom
          align='center'
          sx={{
            marginBottom: '42px',
            color: 'primary.main',
          }}
        >
          React TypeScript Web Apps
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project) => (
            <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.15s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardActionArea
                  component={RouterLink}
                  to={project.path}
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: 'primary.main',
                      padding: '8px 0',
                      textAlign: 'center',
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
