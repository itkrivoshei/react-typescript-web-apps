<div align="center">

# Rock Paper Scissors Arena

Arcade-style round game with random computer choices, result messaging, and live score tracking.

[![Live app](https://img.shields.io/badge/live-RockPaperScissors-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/RockPaperScissors)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![MUI](https://img.shields.io/badge/MUI-arcade%20panel-007fff?style=for-the-badge&logo=mui&logoColor=white)](../../../package.json)

</div>

## Highlights

| Focus          | Details                                                                          |
| -------------- | -------------------------------------------------------------------------------- |
| Game logic     | Typed weapons and outcomes keep win, loss, tie, and message generation explicit. |
| Scoreboard     | Tracks player score, computer score, ties, and total rounds in a compact grid.   |
| Round feedback | Status chip and result icon update immediately after each pick.                  |
| Reset flow     | Reset returns every counter and weapon selection to the initial state.           |

## Source Map

| File                                           | Purpose                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| [RockPaperScissors.tsx](RockPaperScissors.tsx) | Game state, round resolution, scoreboard, reset behavior, and MUI layout. |
| [index.ts](index.ts)                           | Feature export used by the app router.                                    |
