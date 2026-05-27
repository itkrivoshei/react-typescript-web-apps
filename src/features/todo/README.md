<div align="center">

# Redux Todo Command Board

Project-based task board with editable projects, editable todos, completion stats, and persisted state.

[![Live app](https://img.shields.io/badge/live-TodoApp-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![Redux Toolkit](https://img.shields.io/badge/state-Redux%20Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white)](../../redux/slices/toDoSlice.ts)
[![MUI](https://img.shields.io/badge/MUI-task%20board-007fff?style=for-the-badge&logo=mui&logoColor=white)](../../../package.json)

</div>

## Highlights

| Focus         | Details                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------- |
| Project model | Tasks live inside projects, and the active project drives the visible todo list.             |
| CRUD flow     | Add, edit, complete, and delete todos; add, edit, select, and delete projects.               |
| Persistence   | `redux-persist` stores the todo slice so project data survives reloads.                      |
| Board UI      | Lofi-themed MUI layout shows project count and completed/total chips for the active project. |

## Source Map

| File                                                               | Purpose                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [TodoApp.tsx](TodoApp.tsx)                                         | Page shell, theme, background, active project summary, and layout composition. |
| [AddProject.tsx](AddProject.tsx)                                   | Project creation form.                                                         |
| [ProjectList.tsx](ProjectList.tsx)                                 | Project selection, rename, delete, and active-state UI.                        |
| [AddTodo.tsx](AddTodo.tsx)                                         | Todo creation form for the active project.                                     |
| [TodoItem.tsx](TodoItem.tsx)                                       | Todo edit, delete, and completion toggle UI.                                   |
| [../../redux/slices/toDoSlice.ts](../../redux/slices/toDoSlice.ts) | Redux Toolkit slice, actions, ids, and immutable project/todo updates.         |
