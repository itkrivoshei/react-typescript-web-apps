<div align="center">

# Redux Todo Command Board

Project-based task board with editable projects, editable todos, completion stats, and persisted state.

[![Live app](https://img.shields.io/badge/live-TodoApp-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/TodoApp)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-state-764abc?style=for-the-badge&logo=redux&logoColor=white&labelColor=0f172a)](../../redux/slices/toDoSlice.ts)
[![MUI](https://img.shields.io/badge/MUI-task%20board-007fff?style=for-the-badge&logo=mui&logoColor=white&labelColor=0f172a)](../../../package.json)

</div>

## Highlights

| Focus         | Details                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| Project model | Tasks live inside projects, and the active project drives the visible todo list.                                  |
| CRUD flow     | Supports adding, editing, completing, and deleting todos, plus adding, editing, selecting, and deleting projects. |
| Persistence   | `redux-persist` stores the todo slice so project data survives reloads.                                           |
| Board UI      | Lofi-themed MUI layout shows project count and completed/total chips for the active project.                      |

## Source Map

| File                                                                 | Purpose                                                                        |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`TodoApp.tsx`](TodoApp.tsx)                                         | Page shell, theme, background, active project summary, and layout composition. |
| [`AddProject.tsx`](AddProject.tsx)                                   | Project creation form.                                                         |
| [`ProjectList.tsx`](ProjectList.tsx)                                 | Project selection, rename, delete, and active-state UI.                        |
| [`AddTodo.tsx`](AddTodo.tsx)                                         | Todo creation form for the active project.                                     |
| [`TodoItem.tsx`](TodoItem.tsx)                                       | Todo edit, delete, and completion toggle UI.                                   |
| [`../../redux/slices/toDoSlice.ts`](../../redux/slices/toDoSlice.ts) | Redux Toolkit slice, actions, ids, and immutable project/todo updates.         |
