<div align="center">

# Calculator — IBM Numpad Edition

Tactile calculator styled like a classic numpad keyboard, with keyboard input and switchable sound feedback.

[![Live app](https://img.shields.io/badge/live-Calculator-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/Calculator)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![Howler](https://img.shields.io/badge/Howler-audio-ff5a5f?style=for-the-badge&logo=html5&logoColor=white&labelColor=0f172a)](../../../package.json)
[![SCSS](https://img.shields.io/badge/SCSS-keyboard%20skin-cf649a?style=for-the-badge&logo=sass&logoColor=white&labelColor=0f172a)](Calculator.scss)

</div>

## Highlights

| Focus          | Details                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| Input engine   | Handles digits, decimals, chained operators, backspace, clear, divide-by-zero errors, and repeated equals. |
| Keyboard feel  | Custom SVG keycaps, long-key layout, active states, NumLock power mode, and command-style buttons.         |
| Display safety | Limits input length, formats long results, and falls back to exponential notation when needed.             |
| Audio feedback | Howler-backed press/release sounds use separate samples for standard and long keys.                        |

## Source Map

| File                                 | Purpose                                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------------------- |
| [`Calculator.tsx`](Calculator.tsx)   | Calculator state machine, keyboard mapping, command buttons, formatting, and audio setup. |
| [`Button.tsx`](Button.tsx)           | Reusable SVG key component with active and long-key states.                               |
| [`Calculator.scss`](Calculator.scss) | IBM-inspired shell, display, key grid, status lights, and responsive styling.             |
| [`index.ts`](index.ts)               | Feature export used by the app router.                                                    |
