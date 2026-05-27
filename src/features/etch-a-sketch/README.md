<div align="center">

# Etch-a-Sketch Drawing Grid

Browser drawing board with configurable grid size, color controls, and multiple brush modes.

[![Live app](https://img.shields.io/badge/live-EtchASketch-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/EtchASketch)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![SCSS](https://img.shields.io/badge/SCSS-drawing%20surface-cf649a?style=for-the-badge&logo=sass&logoColor=white)](EtchASketch.scss)

</div>

## Highlights

| Focus           | Details                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Grid control    | Board size is clamped from 4 to 64 cells per side and rebuilt from React state.                  |
| Brush modes     | Supports fixed color, random rainbow color per cell, and shadow mode through brightness filters. |
| Canvas controls | Separate color inputs for board background and brush color, plus clear and full reset actions.   |
| Feedback        | Live metadata shows current grid dimensions and active draw mode.                                |

## Source Map

| File                                 | Purpose                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [EtchASketch.tsx](EtchASketch.tsx)   | Grid state, brush modes, color controls, pixel behavior, and reset logic. |
| [EtchASketch.scss](EtchASketch.scss) | Tool panel, canvas sizing, controls, and responsive drawing layout.       |
| [index.ts](index.ts)                 | Feature export used by the app router.                                    |
