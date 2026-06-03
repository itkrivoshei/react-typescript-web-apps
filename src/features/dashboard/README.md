<div align="center">

# App Gallery Dashboard

Main entry dashboard for the React TypeScript Web Apps collection, with featured apps, grouped routes, project stats, and live demo cards.

[![Live app](https://img.shields.io/badge/live-dashboard-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/)
[![Root README](https://img.shields.io/badge/root-README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps/blob/main/package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps/blob/main/tsconfig.json)
[![MUI](https://img.shields.io/badge/MUI-dashboard%20shell-007fff?style=for-the-badge&logo=mui&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps/blob/main/package.json)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/)

</div>

## Highlights

| Focus              | Details                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| App catalog        | `appCatalog.ts` stores route, name, group, summary, stack tags, source path, accent color, and badge text for every app. |
| Featured apps      | WeatherUp, Calculator, and Terminal Sign-up Form are surfaced as the first three main cards.                             |
| Grouped collection | Advanced, interaction, and layout apps are rendered from typed group metadata.                                           |
| Dashboard shell    | MUI, dark theme, responsive grids, stat cards, chips, and hoverable cards create the gallery landing page.               |
| Routing            | Cards use `RouterLink` targets that match the live `HashRouter` routes on GitHub Pages.                                  |

## Source Map

| File                             | Purpose                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`Dashboard.tsx`](Dashboard.tsx) | Dashboard shell, hero section, featured strip, grouped app collection, project cards, and MUI theme.    |
| [`appCatalog.ts`](appCatalog.ts) | Typed app metadata used to render routes, groups, card labels, summaries, stack tags, and source paths. |
| [`index.ts`](index.ts)           | Dashboard export used by the app shell/router.                                                          |

## Notes

- Keep dashboard copy short because the root README already contains the full app gallery.
- Add new apps in `appCatalog.ts` first, then create a matching feature README in `src/features/<feature>/README.md`.
- Keep route names aligned with the `HashRouter` paths used by the live GitHub Pages deployment.
