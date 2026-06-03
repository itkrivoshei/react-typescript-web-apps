<div align="center">

# Tic-Tac-Toe Mini Game

Classic 3x3 grid game with mode selection, random AI turns, win highlighting, and reset flow.

[![Live app](https://img.shields.io/badge/live-TicTacToe-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/TicTacToe)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![SCSS](https://img.shields.io/badge/SCSS-game%20board-cf649a?style=for-the-badge&logo=sass&logoColor=white&labelColor=0f172a)](TicTacToe.scss)

</div>

## Highlights

| Focus          | Details                                                                             |
| -------------- | ----------------------------------------------------------------------------------- |
| Modes          | Starts in either player-vs-AI or local two-player mode.                             |
| Board state    | Uses a typed nine-cell board with X, O, and empty cell states.                      |
| Result logic   | Checks all winning combinations, marks winning cells, and detects tie boards.       |
| Reset behavior | Reset restarts the current mode and clears board, result, tie, and highlight state. |

## Source Map

| File                               | Purpose                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| [`TicTacToe.tsx`](TicTacToe.tsx)   | Board state, mode selection, AI move selection, win/tie checks, and reset flow. |
| [`TicTacToe.scss`](TicTacToe.scss) | Game panel, mode buttons, board visibility, winner and tie styles.              |
| [`index.ts`](index.ts)             | Feature export used by the app router.                                          |
