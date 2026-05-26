<div align="center">

# React TypeScript Web Apps

A routed React app gallery with weather lookup, calculator, todo board, games, audio UI, forms, and layout pages.

[![Live app](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](tsconfig.json)

</div>

## App Ranking

The dashboard is served with `HashRouter`, so every app title opens a direct GitHub Pages route. Rankings move from favorite builds to structured practice apps, classic interaction apps, and early layout demos. Use the **Project README** links for deeper notes inside each app folder.

| Rank | App | Project README | Focus |
| --- | --- | --- | --- |
| **Favorite Builds** |  |  | Stronger apps with the most polished interaction work |
| Top 1 | [Weather Pulse — Live Weather Dashboard](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp) | [Project README](src/components/WeatherApp/README.md) | City search, geolocation, weather metrics, optional GIF layer |
| Top 2 | [Retro Sound Calculator](https://itkrivoshei.github.io/react-typescript-web-apps/#/Calculator) | [Project README](src/components/Calculator/README.md) | Retro keypad UI, strict input handling, sound assets |
| **Structured Practice Apps** |  |  | Bigger practice apps with clearer state, forms, or game flow |
| Top 3 | [Redux Todo Command Board](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp) | [Project README](src/components/TodoList/README.md) | Project-based task board with Redux state |
| Top 4 | [Terminal Sign-up Form](https://itkrivoshei.github.io/react-typescript-web-apps/#/SignUpForm) | [Project README](src/components/SignUpForm/README.md) | Responsive form validation with a terminal-style UI |
| Top 5 | [Tic-Tac-Toe Mini Game](https://itkrivoshei.github.io/react-typescript-web-apps/#/TicTacToe) | [Project README](src/components/TicTacToe/README.md) | Game state, turns, and result flow |
| **Classic Interaction Apps** |  |  | Smaller interactive builds focused on classic browser UI patterns |
| Top 6 | [Etch-a-Sketch Drawing Grid](https://itkrivoshei.github.io/react-typescript-web-apps/#/EtchASketch) | [Project README](src/components/EtchASketch/README.md) | Interactive drawing grid with classic controls |
| Top 7 | [Book Library Shelf](https://itkrivoshei.github.io/react-typescript-web-apps/#/BookLibrary) | [Project README](src/components/LibraryApp/README.md) | Book list UI with add flow |
| Top 8 | [Rock Paper Scissors Arena](https://itkrivoshei.github.io/react-typescript-web-apps/#/RockPaperScissors) | [Project README](src/components/RockPaperScissors/README.md) | Scoreboard and result state |
| Top 9 | [Drum Kit Sound Pad](https://itkrivoshei.github.io/react-typescript-web-apps/#/DrumKit) | [Project README](src/components/DrumKit/README.md) | Keyboard-triggered audio pads |
| **Early Layout Demos** |  |  | Earlier layout-focused pages and static UI exercises |
| Top 10 | [Recipe Cards](https://itkrivoshei.github.io/react-typescript-web-apps/#/OdinRecipes) | [Project README](src/components/Recipes/README.md) | Static recipe page |
| Top 11 | [Admin Dashboard Layout](https://itkrivoshei.github.io/react-typescript-web-apps/#/DashLanding) | [Project README](src/components/AdminDashboard/README.md) | Admin dashboard layout |
| Top 12 | [Restaurant Menu Page](https://itkrivoshei.github.io/react-typescript-web-apps/#/Restaurant) | [Project README](src/components/RestaurantPage/README.md) | Menu, contact, and home sections |
| Top 13 | [Landing Page Demo](https://itkrivoshei.github.io/react-typescript-web-apps/#/Landing) | [Project README](src/components/LandingPage/README.md) | Responsive marketing-style layout |

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

## License

[MIT](LICENSE)
