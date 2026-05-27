<div align="center">

# Landing Page Demo

Northline single-page service layout with anchor navigation, hero media, service cards, and CTA section.

[![Live app](https://img.shields.io/badge/live-Landing-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/Landing)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![SCSS](https://img.shields.io/badge/SCSS-responsive%20sections-cf649a?style=for-the-badge&logo=sass&logoColor=white)](Landing.scss)

</div>

## Highlights

| Focus            | Details                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Page structure   | Header, hero, services, process quote, contact CTA, and footer are composed as a complete landing page. |
| Navigation       | In-page anchor links keep the demo self-contained without extra route state.                            |
| Content system   | Service cards and navigation items are data-driven arrays for clean updates.                            |
| Visual hierarchy | SCSS separates full-width bands from constrained content blocks and responsive hero media.              |

## Source Map

| File                         | Purpose                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------ |
| [Landing.tsx](Landing.tsx)   | Page sections, service data, anchor navigation, repository CTA, and mail link. |
| [Landing.scss](Landing.scss) | Header, hero, service grid, quote band, CTA, footer, and responsive styling.   |
| [index.ts](index.ts)         | Feature export used by the app router.                                         |
