export type AppGroup = 'featured' | 'solid' | 'practice' | 'legacy';

export interface DashboardApp {
  path: string;
  name: string;
  accent: string;
  group: AppGroup;
  summary: string;
  stack: string[];
}

export const appGroupLabels: Record<AppGroup, string> = {
  featured: 'Favorite / stronger apps',
  solid: 'Structured practice apps',
  practice: 'Classic interaction exercises',
  legacy: 'Early layout demos',
};

export const dashboardApps: DashboardApp[] = [
  {
    path: '/WeatherApp',
    name: 'Weather App',
    accent: '#4cc9f0',
    group: 'featured',
    summary: 'Weather lookup with geolocation, city search, and live metrics.',
    stack: ['Redux', 'API', 'MUI'],
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    accent: '#d6c4a8',
    group: 'featured',
    summary:
      'Retro calculator with keyboard-style UI and stricter input handling.',
    stack: ['React', 'SCSS'],
  },
  {
    path: '/TodoApp',
    name: 'Todo App',
    accent: '#c8b6ff',
    group: 'solid',
    summary: 'Project-based task board with Redux state management.',
    stack: ['Redux', 'MUI'],
  },
  {
    path: '/SignUpForm',
    name: 'Sign-up Form',
    accent: '#38bdf8',
    group: 'solid',
    summary: 'Terminal-themed form with validation and responsive layout.',
    stack: ['React', 'Validation'],
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',
    accent: '#f97316',
    group: 'solid',
    summary: 'Small game implementation with simple state transitions.',
    stack: ['React', 'Game'],
  },
  {
    path: '/EtchASketch',
    name: 'Etch a Sketch',
    accent: '#ef4444',
    group: 'practice',
    summary: 'Interactive drawing grid with classic controls.',
    stack: ['React', 'Canvas-like UI'],
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',
    accent: '#facc15',
    group: 'practice',
    summary: 'Book list interface with modal-style add flow.',
    stack: ['React', 'Forms'],
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',
    accent: '#22c55e',
    group: 'practice',
    summary: 'Classic game with scoreboard and result state.',
    stack: ['React', 'Game'],
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',
    accent: '#fb7185',
    group: 'practice',
    summary: 'Keyboard-triggered sound pad with visual feedback.',
    stack: ['React', 'Audio'],
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',
    accent: '#84cc16',
    group: 'legacy',
    summary: 'Early recipe layout exercise with refreshed styling.',
    stack: ['React', 'Layout'],
  },
  {
    path: '/DashLanding',
    name: 'Dashboard',
    accent: '#a78bfa',
    group: 'legacy',
    summary: 'Admin dashboard landing page layout exercise.',
    stack: ['React', 'Layout'],
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',
    accent: '#f59e0b',
    group: 'legacy',
    summary: 'Restaurant page layout with menu/contact sections.',
    stack: ['React', 'Layout'],
  },
  {
    path: '/Landing',
    name: 'Landing',
    accent: '#60a5fa',
    group: 'legacy',
    summary: 'Landing page layout exercise with responsive sections.',
    stack: ['React', 'Layout'],
  },
];
