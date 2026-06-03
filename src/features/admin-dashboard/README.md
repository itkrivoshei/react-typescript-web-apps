<div align="center">

# Admin Dashboard Layout

Responsive operations dashboard with sidebar navigation, action links, metrics, and project cards.

[![Live app](https://img.shields.io/badge/live-DashLanding-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/DashLanding)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![SCSS](https://img.shields.io/badge/SCSS-layout%20system-cf649a?style=for-the-badge&logo=sass&logoColor=white&labelColor=0f172a)](DashLanding.scss)
[![React Icons](https://img.shields.io/badge/React%20Icons-icons-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)

</div>

## Highlights

| Focus             | Details                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Dashboard shell   | Fixed sidebar, top search bar, profile affordance, and primary action row.                      |
| Data presentation | Metric cards, project cards, announcements, and statistics are split into small typed sections. |
| Useful links      | Repository, issues, actions, and profile links are wired directly into the UI.                  |
| Visual system     | React Icons and SCSS create a dense admin layout without external dashboard templates.          |

## Source Map

| File                                   | Purpose                                                                    |
| -------------------------------------- | -------------------------------------------------------------------------- |
| [`DashLanding.tsx`](DashLanding.tsx)   | Component composition, typed dashboard data, action links, and icon usage. |
| [`DashLanding.scss`](DashLanding.scss) | Sidebar, header, grid layout, cards, and responsive dashboard styling.     |
| [`index.ts`](index.ts)                 | Feature export used by the app router.                                     |
