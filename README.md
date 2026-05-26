<div align="center">

# React TypeScript Web Apps

A routed React app gallery with weather lookup, calculator, todo board, games, audio UI, forms, and layout pages.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](tsconfig.json)

### [Open App Gallery ->](https://itkrivoshei.github.io/react-typescript-web-apps/)

</div>

## App Catalog

The dashboard is served with `HashRouter`, so every app can be opened directly from GitHub Pages.

| App | Route | Highlights |
| --- | --- | --- |
| Weather App | [`#/WeatherApp`](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp) | City search, geolocation, weather metrics, optional GIF layer |
| Calculator | [`#/Calculator`](https://itkrivoshei.github.io/react-typescript-web-apps/#/Calculator) | Retro keypad UI, strict input handling, sound assets |
| Todo App | [`#/TodoApp`](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp) | Project-based task board with Redux state |
| Tic Tac Toe | [`#/TicTacToe`](https://itkrivoshei.github.io/react-typescript-web-apps/#/TicTacToe) | Game state and result flow |
| Book Library | [`#/BookLibrary`](https://itkrivoshei.github.io/react-typescript-web-apps/#/BookLibrary) | Book list UI with add flow |
| Sign-up Form | [`#/SignUpForm`](https://itkrivoshei.github.io/react-typescript-web-apps/#/SignUpForm) | Responsive form validation |
| Etch a Sketch | [`#/EtchASketch`](https://itkrivoshei.github.io/react-typescript-web-apps/#/EtchASketch) | Interactive drawing grid |
| Drum Kit | [`#/DrumKit`](https://itkrivoshei.github.io/react-typescript-web-apps/#/DrumKit) | Keyboard-triggered audio pads |
| Rock Paper Scissors | [`#/RockPaperScissors`](https://itkrivoshei.github.io/react-typescript-web-apps/#/RockPaperScissors) | Scoreboard and result state |
| Recipes | [`#/OdinRecipes`](https://itkrivoshei.github.io/react-typescript-web-apps/#/OdinRecipes) | Static recipe page |
| Landing Page | [`#/Landing`](https://itkrivoshei.github.io/react-typescript-web-apps/#/Landing) | Responsive marketing-style layout |
| Restaurant | [`#/Restaurant`](https://itkrivoshei.github.io/react-typescript-web-apps/#/Restaurant) | Menu, contact, and home sections |
| Dashboard | [`#/DashLanding`](https://itkrivoshei.github.io/react-typescript-web-apps/#/DashLanding) | Admin dashboard layout |

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
├── components/   # routed app components
├── features/     # newer feature folders
├── redux/        # store and slices
└── styles/       # global SCSS
```

## Deployment

CI runs on pushes and pull requests to `main`. A successful `CI` workflow triggers the `Deploy` workflow, which builds the app and publishes the `build/` artifact to GitHub Pages.

Live app: https://itkrivoshei.github.io/react-typescript-web-apps/

## License

[MIT](LICENSE)
