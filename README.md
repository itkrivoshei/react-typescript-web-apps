<div align="center">

# React TypeScript Web Apps

A routed React app gallery with weather lookup, calculator, todo board, games, audio UI, forms, and layout pages.

[![Live app](https://img.shields.io/badge/live-app-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/)
[![CI](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/ci.yml?branch=main&style=for-the-badge&label=ci&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/github/actions/workflow/status/itkrivoshei/react-typescript-web-apps/deploy.yml?branch=main&style=for-the-badge&label=deploy&logo=githubactions&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](tsconfig.json)
[![License](https://img.shields.io/github/license/itkrivoshei/react-typescript-web-apps?style=for-the-badge&labelColor=0f172a)](LICENSE)

</div>

## App Gallery

The dashboard is served with [`HashRouter`](https://reactrouter.com/), so every app title opens a direct [GitHub Pages](https://pages.github.com/) route. Use the **Source & README** links to open each app folder with its source files and README preview.

| App                                                                                                          | Source & README                                           | Focus                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ⭐ [WeatherUp — GIF Weather Dashboard](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp) | [Source files & README](src/features/weather)             | Weather search with geolocation, live metrics, and a GIF API layer that makes the forecast feel more visual and interactive |
| ⭐ [Calculator — IBM Numpad Edition](https://itkrivoshei.github.io/react-typescript-web-apps/#/Calculator)   | [Source files & README](src/features/calculator)          | Calculator styled like an old IBM numpad keyboard, with tactile button layout, strict input handling, and sound feedback    |
| [Redux Todo Command Board](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp)                | [Source files & README](src/features/todo)                | Project-based task board with Redux state management                                                                        |
| ⭐ [Terminal Sign-up Form](https://itkrivoshei.github.io/react-typescript-web-apps/#/SignUpForm)             | [Source files & README](src/features/signup)              | Responsive form validation wrapped in a terminal-style interface                                                            |
| ✦ [Tic-Tac-Toe Mini Game](https://itkrivoshei.github.io/react-typescript-web-apps/#/TicTacToe)               | [Source files & README](src/features/tic-tac-toe)         | Compact game flow with turn handling, state updates, and win/draw result logic                                              |
| ✦ [Etch-a-Sketch Drawing Grid](https://itkrivoshei.github.io/react-typescript-web-apps/#/EtchASketch)        | [Source files & README](src/features/etch-a-sketch)       | Interactive drawing grid with classic browser controls and quick visual feedback                                            |
| [Book Library Shelf](https://itkrivoshei.github.io/react-typescript-web-apps/#/BookLibrary)                  | [Source files & README](src/features/book-library)        | Book list UI with add flow                                                                                                  |
| [Rock Paper Scissors Arena](https://itkrivoshei.github.io/react-typescript-web-apps/#/RockPaperScissors)     | [Source files & README](src/features/rock-paper-scissors) | Scoreboard and result state                                                                                                 |
| [Drum Kit Sound Pad](https://itkrivoshei.github.io/react-typescript-web-apps/#/DrumKit)                      | [Source files & README](src/features/drum-kit)            | Keyboard-triggered audio pads                                                                                               |
| [Recipe Cards](https://itkrivoshei.github.io/react-typescript-web-apps/#/OdinRecipes)                        | [Source files & README](src/features/odin-recipes)        | Static recipe page                                                                                                          |
| [Admin Dashboard Layout](https://itkrivoshei.github.io/react-typescript-web-apps/#/DashLanding)              | [Source files & README](src/features/admin-dashboard)     | Admin dashboard layout                                                                                                      |
| [Restaurant Menu Page](https://itkrivoshei.github.io/react-typescript-web-apps/#/Restaurant)                 | [Source files & README](src/features/restaurant-page)     | Menu, contact, and home sections                                                                                            |
| [Landing Page Demo](https://itkrivoshei.github.io/react-typescript-web-apps/#/Landing)                       | [Source files & README](src/features/landing-page)        | Responsive marketing-style layout                                                                                           |

## Tech Stack

| Area         | Tools                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App shell    | [React](https://react.dev/), [React Router](https://reactrouter.com/), [Vite](https://vite.dev/)                                                             |
| Language     | [TypeScript](https://www.typescriptlang.org/)                                                                                                                |
| State        | [Redux Toolkit](https://redux-toolkit.js.org/), [React Redux](https://react-redux.js.org/), [redux-persist](https://github.com/rt2zz/redux-persist)          |
| UI libraries | [Chakra UI](https://chakra-ui.com/), [Material UI](https://mui.com/), [React Icons](https://react-icons.github.io/react-icons/)                              |
| Motion/audio | [Framer Motion](https://motion.dev/), [Howler](https://howlerjs.com/)                                                                                        |
| Styling      | [SCSS](https://sass-lang.com/), component styles                                                                                                             |
| Quality      | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/), [Vitest](https://vitest.dev/)                |
| Delivery     | [GitHub Actions](https://github.com/itkrivoshei/react-typescript-web-apps/actions), [GitHub Pages](https://itkrivoshei.github.io/react-typescript-web-apps/) |

## Run Locally

```bash
git clone https://github.com/itkrivoshei/react-typescript-web-apps.git
cd react-typescript-web-apps
nvm use
npm ci
npm start
```

Open the URL printed by [Vite](https://vite.dev/), usually `http://localhost:5173`.

## Environment Variables

Create `.env` from [`.env.example`](.env.example) when using the API-backed apps:

```text
VITE_GIPHY_API_KEY=
```

The app can build without exposing secrets in the repository. [GitHub Actions](https://github.com/itkrivoshei/react-typescript-web-apps/actions) injects production values from repository secrets.

## Commands

Scripts are defined in [`package.json`](package.json).

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm start`            | Start the dev server                            |
| `npm run build`        | Build static assets                             |
| `npm test`             | Run tests once                                  |
| `npm run typecheck`    | Run TypeScript checks                           |
| `npm run lint`         | Run ESLint                                      |
| `npm run format:check` | Check Prettier formatting                       |
| `npm run verify`       | Type-check, lint, format-check, test, and build |

## Structure

```text
src/
├── app/          # router, navigation, theme
├── features/     # routed apps and feature folders
├── redux/        # store and slices
└── styles/       # global SCSS
```

## Deployment

[`ci.yml`](.github/workflows/ci.yml) runs on pushes and pull requests to `main`. A successful CI workflow triggers [`deploy.yml`](.github/workflows/deploy.yml), which builds the app and publishes the `dist/` artifact to [GitHub Pages](https://itkrivoshei.github.io/react-typescript-web-apps/).

## License

[MIT](LICENSE)
