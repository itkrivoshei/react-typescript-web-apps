<div align="center">

# Restaurant Menu Page

Violet Table restaurant demo with tabbed Home, Menu, and Contact sections.

[![Live app](https://img.shields.io/badge/live-Restaurant-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/Restaurant)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![SCSS](https://img.shields.io/badge/SCSS-section%20styles-cf649a?style=for-the-badge&logo=sass&logoColor=white)](Restaurant.scss)

</div>

## Highlights

| Focus           | Details                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------- |
| Tab state       | A typed `RestaurantTab` state switches between Home, Menu, and Contact without extra routing. |
| Home section    | Hero copy, restaurant highlights, and an Unsplash dining image establish the brand quickly.   |
| Menu section    | Menu items are array-driven cards with names, descriptions, prices, and tags.                 |
| Contact section | Reservation details are rendered from structured contact data.                                |

## Source Map

| File                               | Purpose                                                            |
| ---------------------------------- | ------------------------------------------------------------------ |
| [Restaurant.tsx](Restaurant.tsx)   | Tab state, navigation, shell layout, and active section rendering. |
| [Home.tsx](Home.tsx)               | Brand introduction, highlights, and hero image.                    |
| [Menu.tsx](Menu.tsx)               | Menu data and dish card rendering.                                 |
| [Contact.tsx](Contact.tsx)         | Contact data and reservation details.                              |
| [Restaurant.scss](Restaurant.scss) | Shared restaurant shell and tab styling.                           |
| [index.ts](index.ts)               | Feature export used by the app router.                             |
