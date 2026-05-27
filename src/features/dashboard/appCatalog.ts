export type AppGroup = 'featured' | 'advanced' | 'interaction' | 'layout';

export interface DashboardApp {
  path: string;
  name: string;
  accent: string;
  group: AppGroup;
  summary: string;
  stack: string[];
  sourcePath: string;
  badge: string;
}

export const appGroupLabels: Record<AppGroup, string> = {
  featured: 'Main apps',
  advanced: 'State and logic',
  interaction: 'Interactive apps',
  layout: 'Pages and layouts',
};

export const dashboardApps: DashboardApp[] = [
  {
    path: '/WeatherApp',
    name: 'WeatherUp',
    accent: '#4cc9f0',
    group: 'featured',
    summary:
      'Weather dashboard with city search, browser geolocation, live metrics, and a GIF reaction layer.',
    stack: ['Redux', 'API', 'MUI'],
    sourcePath: 'src/features/weather',
    badge: 'API dashboard',
  },
  {
    path: '/Calculator',
    name: 'Calculator — IBM Numpad',
    accent: '#d6c4a8',
    group: 'featured',
    summary:
      'Calculator styled around an old IBM numpad keyboard with tactile layout and sound feedback.',
    stack: ['React', 'SCSS', 'Audio'],
    sourcePath: 'src/features/calculator',
    badge: 'Favorite UI',
  },
  {
    path: '/SignUpForm',
    name: 'Terminal Sign-up Form',
    accent: '#38bdf8',
    group: 'featured',
    summary:
      'Terminal-themed form with validation, phone formatting, password rules, and animated canvas background.',
    stack: ['React', 'Validation', 'Canvas'],
    sourcePath: 'src/features/signup',
    badge: 'Form UX',
  },
  {
    path: '/TodoApp',
    name: 'Todo Command Board',
    accent: '#c8b6ff',
    group: 'advanced',
    summary:
      'Project-based task board with Redux state management, project switching, and editable todos.',
    stack: ['Redux', 'MUI', 'State'],
    sourcePath: 'src/features/todo',
    badge: 'State app',
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',
    accent: '#f97316',
    group: 'advanced',
    summary:
      'Compact game implementation with turn handling, AI mode, win detection, and reset flow.',
    stack: ['React', 'Game', 'Logic'],
    sourcePath: 'src/features/tic-tac-toe',
    badge: 'Game logic',
  },
  {
    path: '/EtchASketch',
    name: 'Etch A Sketch',
    accent: '#ef4444',
    group: 'interaction',
    summary:
      'Interactive drawing grid with size controls, brush modes, color tools, and quick visual feedback.',
    stack: ['React', 'Grid UI', 'SCSS'],
    sourcePath: 'src/features/etch-a-sketch',
    badge: 'Creative UI',
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',
    accent: '#facc15',
    group: 'interaction',
    summary:
      'Reading tracker with book creation, read status, progress metrics, and total page count.',
    stack: ['React', 'Forms', 'MUI'],
    sourcePath: 'src/features/book-library',
    badge: 'CRUD UI',
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',
    accent: '#22c55e',
    group: 'interaction',
    summary:
      'Arcade-style game with round outcomes, scoreboard state, reset flow, and clear result feedback.',
    stack: ['React', 'Game', 'MUI'],
    sourcePath: 'src/features/rock-paper-scissors',
    badge: 'Arcade game',
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',
    accent: '#fb7185',
    group: 'interaction',
    summary:
      'Keyboard-triggered audio pad with clickable drum samples, visual key states, and playback tuning.',
    stack: ['React', 'Audio', 'SCSS'],
    sourcePath: 'src/features/drum-kit',
    badge: 'Audio UI',
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',
    accent: '#84cc16',
    group: 'layout',
    summary:
      'Recipe page exercise focused on content layout, visual hierarchy, and refreshed styling.',
    stack: ['React', 'Layout'],
    sourcePath: 'src/features/odin-recipes',
    badge: 'Content page',
  },
  {
    path: '/DashLanding',
    name: 'Dashboard Layout',
    accent: '#a78bfa',
    group: 'layout',
    summary:
      'Admin dashboard layout exercise with panels, navigation structure, and responsive sections.',
    stack: ['React', 'Layout'],
    sourcePath: 'src/features/admin-dashboard',
    badge: 'Admin UI',
  },
  {
    path: '/Restaurant',
    name: 'Restaurant Page',
    accent: '#f59e0b',
    group: 'layout',
    summary:
      'Restaurant page layout with menu, home, and contact sections wrapped in a cohesive theme.',
    stack: ['React', 'Layout'],
    sourcePath: 'src/features/restaurant-page',
    badge: 'Marketing page',
  },
  {
    path: '/Landing',
    name: 'Landing Page',
    accent: '#60a5fa',
    group: 'layout',
    summary:
      'Responsive landing page exercise with marketing sections, spacing, and call-to-action structure.',
    stack: ['React', 'Layout'],
    sourcePath: 'src/features/landing-page',
    badge: 'Landing UI',
  },
];
