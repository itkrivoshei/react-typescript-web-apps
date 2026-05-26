<div align="center">

# React TypeScript Web Apps

A routed React app gallery with weather lookup, calculator, todo board, games, audio UI, forms, and layout pages.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](tsconfig.json)

</div>

## App Gallery

The dashboard is served with `HashRouter`, so every app title opens a direct GitHub Pages route. Use the **Source & README** links to open each app folder with its source files and README preview.

| App | Source & README | Focus |
| --- | --- | --- |
| ⭐ [WeatherUp — GIF Weather Dashboard](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp) | [Source files & README](src/features/weather) | Weather search with geolocation, live metrics, and a GIF API layer that makes the forecast feel more visual and interactive |
| ⭐ [Calculator — IBM Numpad Edition](https://itkrivoshei.github.io/react-typescript-web-apps/#/Calculator) | [Source files & README](src/features/calculator) | Calculator styled like an old IBM numpad keyboard, with tactile button layout, strict input handling, and sound feedback |
| [Redux Todo Command Board](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp) | [Source files & README](src/components/TodoList) | Project-based task board with Redux state management |
| ⭐ [Terminal Sign-up Form](https://itkrivoshei.github.io/react-typescript-web-apps/#/SignUpForm) | [Source files & README](src/features/signup) | Responsive form validation wrapped in a terminal-style interface |
| ✦ [Tic-Tac-Toe Mini Game](https://itkrivoshei.github.io/react-typescript-web-apps/#/TicTacToe) | [Source files & README](src/components/TicTacToe) | Compact game flow with turn handling, state updates, and win/draw result logic |
| ✦ [Etch-a-Sketch Drawing Grid](https://itkrivoshei.github.io/react-typescript-web-apps/#/EtchASketch) | [Source files & README](src/components/EtchASketch) | Interactive drawing grid with classic browser controls and quick visual feedback |
| [Book Library Shelf](https://itkrivoshei.github.io/react-typescript-web-apps/#/BookLibrary) | [Source files & README](src/components/LibraryApp) | Book list UI with add flow |
| [Rock Paper Scissors Arena](https://itkrivoshei.github.io/react-typescript-web-apps/#/RockPaperScissors) | [Source files & README](src/components/RockPaperScissors) | Scoreboard and result state |
| [Drum Kit Sound Pad](https://itkrivoshei.github.io/react-typescript-web-apps/#/DrumKit) | [Source files & README](src/components/DrumKit) | Keyboard-triggered audio pads |
| [Recipe Cards](https://itkrivoshei.github.io/react-typescript-web-apps/#/OdinRecipes) | [Source files & README](src/components/Recipes) | Static recipe page |
| [Admin Dashboard Layout](https://itkrivoshei.github.io/react-typescript-web-apps/#/DashLanding) | [Source files & README](src/components/AdminDashboard) | Admin dashboard layout |
| [Restaurant Menu Page](https://itkrivoshei.github.io/react-typescript-web-apps/#/Restaurant) | [Source files & README](src/components/RestaurantPage) | Menu, contact, and home sections |
| [Landing Page Demo](https://itkrivoshei.github.io/react-typescript-web-apps/#/Landing) | [Source files & README](src/components/LandingPage) | Responsive marketing-style layout |

## Stack

| Area | Tools |
| --- | --- |
| App shell | React, React Router, Create React App |
| Language | TypeScript |
| State | Redux Toolkit, React Redux, redux-persist |
| UI libraries | Chakra UI, Material UI, React Icons |
| Motion/audio | Framer Motion, Howler |
| Styling | SCSS, component styles |
| Quality | ESLint, Prettier, TypeScript, Jest |
| Delivery | GitHub Actions, GitHub Pages |

## Run Locally

```bash
git clone https://github.com/itkrivoshei/react-typescript-web-apps.git
cd react-typescript-web-apps
nvm use
npm ci
npm start
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env` from `.env.example` when using the API-backed apps:

```text
REACT_APP_WEATHER_API_KEY=
REACT_APP_GIPHY_API_KEY=
```

The app can build without exposing secrets in the repository. GitHub Actions injects production values from repository secrets.

## Commands

| Command | Description |
| --- | --- |
| `npm start` | Start the dev server |
| `npm run build` | Build static assets |
| `npm test` | Run tests once |
| `npm run typecheck` | Run TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check Prettier formatting |
| `npm run verify` | Type-check, lint, format-check, test, and build |

## Structure

```text
src/
├── app/          # router, navigation, theme
├── components/   # legacy routed app folders
├── features/     # migrated feature folders
├── redux/        # store and slices
└── styles/       # global SCSS
```

## Deployment

CI runs on pushes and pull requests to `main`. A successful `CI` workflow triggers the `Deploy` workflow, which builds the app and publishes the `build/` artifact to GitHub Pages.

## License

[MIT](LICENSE)
