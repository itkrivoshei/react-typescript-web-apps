const mediaBaseUrl =
  'https://raw.githubusercontent.com/itkrivoshei/react-typescript-web-apps/main/media';

export interface DashboardApp {
  path: string;
  name: string;
  imageUrl: string;
  accent: string;
}

export const dashboardApps: DashboardApp[] = [
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
