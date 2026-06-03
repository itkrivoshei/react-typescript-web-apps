<div align="center">

# Odin Recipes

Small cookbook interface with recipe cards, image-led detail pages, ingredients, and steps.

[![Live app](https://img.shields.io/badge/live-OdinRecipes-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/OdinRecipes)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![MUI](https://img.shields.io/badge/MUI-card%20layout-007fff?style=for-the-badge&logo=mui&logoColor=white&labelColor=0f172a)](../../../package.json)

</div>

## Highlights

| Focus          | Details                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| Recipe model   | Three typed recipes include id, title, image, description, ingredients, and ordered steps. |
| View flow      | Local `selectedRecipeId` switches between the recipe grid and a focused detail view.       |
| Reading UI     | Ingredient and step counts appear as chips before the full detail content.                 |
| Visual refresh | MUI dark theme and large food imagery modernize the original Odin recipe exercise.         |

## Source Map

| File                                 | Purpose                                                         |
| ------------------------------------ | --------------------------------------------------------------- |
| [`OdinRecipes.tsx`](OdinRecipes.tsx) | Recipe data, list/detail views, selection state, and MUI theme. |
| [`index.ts`](index.ts)               | Feature export used by the app router.                          |
