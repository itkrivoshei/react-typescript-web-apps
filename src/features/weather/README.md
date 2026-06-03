<div align="center">

# WeatherUp — GIF Weather Dashboard

Weather lookup with geolocation, Open-Meteo metrics, unit switching, and optional GIF reactions.

[![Live app](https://img.shields.io/badge/live-WeatherApp-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-state-764abc?style=for-the-badge&logo=redux&logoColor=white&labelColor=0f172a)](../../../package.json)
[![MUI](https://img.shields.io/badge/MUI-weather%20panel-007fff?style=for-the-badge&logo=mui&logoColor=white&labelColor=0f172a)](../../../package.json)
[![GIPHY](https://img.shields.io/badge/GIPHY-optional%20GIFs-121212?style=for-the-badge&logo=giphy&logoColor=white&labelColor=0f172a)](weatherGif.ts)

</div>

## Highlights

| Focus         | Details                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Location flow | Browser geolocation, debounced city suggestions, and manual city fallback.                                   |
| Weather data  | Open-Meteo data is mapped into temperature, feels-like, wind, humidity, clouds, pressure, and precipitation. |
| Unit toggle   | One control switches display values between EU and US formats.                                               |
| GIF layer     | Weather condition text is converted into safe GIPHY queries for optional visual reactions.                   |

## Source Map

| File                                                                       | Purpose                                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`WeatherApp.tsx`](WeatherApp.tsx)                                         | MUI theme, page shell, and cosmos background.                                          |
| [`SettingsMenu.tsx`](SettingsMenu.tsx)                                     | City autocomplete, search submission, and unit toggle controls.                        |
| [`MainWeatherDisplay.tsx`](MainWeatherDisplay.tsx)                         | Geolocation request, loading/error states, metric cards, and unit formatting.          |
| [`WeatherMeme.tsx`](WeatherMeme.tsx)                                       | Condition-driven GIF fetch and lazy image rendering.                                   |
| [`weatherGif.ts`](weatherGif.ts)                                           | GIPHY query mapping and optional API request.                                          |
| [`../../redux/slices/weatherSlice.ts`](../../redux/slices/weatherSlice.ts) | Async thunks, Open-Meteo mapping, reverse geocoding, unit conversion, and slice state. |

## Notes

- Open-Meteo weather and geocoding work without a private key.
- `VITE_GIPHY_API_KEY` enables GIF reactions; the weather panel still works without it.
