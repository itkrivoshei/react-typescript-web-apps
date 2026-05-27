<div align="center">

# Book Library Shelf

Compact reading tracker with book cards, progress stats, and a focused add-book flow.

[![Live app](https://img.shields.io/badge/live-BookLibrary-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/BookLibrary)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![MUI](https://img.shields.io/badge/MUI-dark%20theme-007fff?style=for-the-badge&logo=mui&logoColor=white)](../../../package.json)

</div>

## Highlights

| Focus         | Details                                                                                 |
| ------------- | --------------------------------------------------------------------------------------- |
| Reading stats | Tracks total books, read books, unread books, total pages, and read percentage.         |
| Add flow      | Conditional form validates title, author, positive page count, and initial read status. |
| Book actions  | Each card supports read toggling and removal with immediate local state updates.        |
| Presentation  | Custom MUI dark theme, stat cards, progress bar, chips, and responsive card grid.       |

## Source Map

| File                               | Purpose                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------- |
| [BookLibrary.tsx](BookLibrary.tsx) | Book data model, local state, form handling, derived stats, and MUI layout. |
| [index.ts](index.ts)               | Feature export used by the app router.                                      |
