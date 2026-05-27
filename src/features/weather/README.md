<div align="center">

# WeatherUp - GIF Weather Dashboard

Weather lookup with geolocation, Open-Meteo metrics, unit switching, and optional GIF reactions.

[![Live app](https://img.shields.io/badge/live-WeatherApp-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![Redux Toolkit](https://img.shields.io/badge/state-Redux%20Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white)](../../redux/slices/weatherSlice.ts)
[![MUI](https://img.shields.io/badge/MUI-weather%20panel-007fff?style=for-the-badge&logo=mui&logoColor=white)](../../../package.json)
[![GIPHY](https://img.shields.io/badge/GIPHY-optional%20GIFs-121212?style=for-the-badge&logo=giphy&logoColor=white)](weatherGif.ts)

</div>

## Highlights

| Focus         | Details                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Location flow | Browser geolocation on first load, debounced city suggestions, and manual city fallback.                                       |
| Weather data  | Open-Meteo current weather is mapped into temperature, feels-like, wind, gusts, humidity, clouds, pressure, and precipitation. |
| Region toggle | One button switches display units between EU and US formats.                                                                   |
| GIF layer     | Weather condition text is converted into safe GIPHY search queries for visual reactions.                                       |

## Source Map

| File                                                                     | Purpose                                                                                |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [WeatherApp.tsx](WeatherApp.tsx)                                         | MUI theme, page shell, and cosmos background.                                          |
| [SettingsMenu.tsx](SettingsMenu.tsx)                                     | City autocomplete, search submission, and unit toggle controls.                        |
| [MainWeatherDisplay.tsx](MainWeatherDisplay.tsx)                         | Geolocation request, loading/error states, metric cards, and unit formatting.          |
| [WeatherMeme.tsx](WeatherMeme.tsx)                                       | Condition-driven GIF fetch and lazy image rendering.                                   |
| [weatherGif.ts](weatherGif.ts)                                           | GIPHY query mapping and optional API request.                                          |
| [../../redux/slices/weatherSlice.ts](../../redux/slices/weatherSlice.ts) | Async thunks, Open-Meteo mapping, reverse geocoding, unit conversion, and slice state. |

## API Notes

- Open-Meteo weather and geocoding work without a private key.
- `REACT_APP_GIPHY_API_KEY` enables GIF reactions; the forecast panel still works without it.
