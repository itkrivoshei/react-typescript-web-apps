export type AppGroup = 'featured' | 'solid' | 'practice' | 'legacy';

export interface DashboardApp {
  path: string;
  name: string;
  accent: string;
  group: AppGroup;
  summary: string;
  stack: string[];
}

export const dashboardApps: DashboardApp[] = [
  {
    path: '/WeatherApp',
    name: '⭐ WeatherUp',
    accent: '#4cc9f0',
    group: 'featured',
    summary:
      'Weather dashboard with city search, geolocation, live metrics, and GIF reactions.',
    stack: ['Redux', 'API', 'MUI'],
  },
  {
    path: '/Calculator',
    name: '⭐ Calculator — IBM Numpad',
    accent: '#d6c4a8',
    group: 'featured',
    summary:
      'Calculator styled like an old IBM numpad keyboard with tactile sound feedback.',
    stack: ['React', 'SCSS', 'Audio'],
  },
  {
    path: '/TodoApp',
    name: 'Todo Command Board',
    accent: '#c8b6ff',
    group: 'solid',
    summary:
      'Project-based task board with Redux state management and a lofi dashboard layout.',
    stack: ['Redux', 'MUI'],
  },
  {
    path: '/SignUpForm',
    name: '⭐ Terminal Sign-up Form',
    accent: '#38bdf8',
    group: 'solid',
    summary:
      'Terminal-themed form with validation, phone formatting, and animated canvas background.',
    stack: ['React', 'Validation'],
  },
  {
    path: '/TicTacToe',
    name: '✦ Tic Tac Toe',
    accent: '#f97316',
    group: 'solid',
    summary:
      'Compact game implementation with turn handling, AI mode, and result states.',
    stack: ['React', 'Game'],
  },
  {
    path: '/EtchASketch',
    name: '✦ Etch A Sketch',
    accent: '#ef4444',
    group: 'practice',
    summary:
      'Interactive drawing grid with size controls, color tools, and brush modes.',
    stack: ['React', 'Grid UI'],
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
    name: 'Dashboard Layout',
    accent: '#a78bfa',
    group: 'legacy',
    summary: 'Admin dashboard landing page layout exercise.',
    stack: ['React', 'Layout'],
  },
  {
    path: '/Restaurant',
    name: 'Restaurant Page',
    accent: '#f59e0b',
    group: 'legacy',
    summary: 'Restaurant page layout with menu and contact sections.',
    stack: ['React', 'Layout'],
  },
  {
    path: '/Landing',
    name: 'Landing Page',
    accent: '#60a5fa',
    group: 'legacy',
    summary: 'Landing page layout exercise with responsive sections.',
    stack: ['React', 'Layout'],
  },
];
