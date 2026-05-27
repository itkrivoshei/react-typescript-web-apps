<div align="center">

# Terminal Sign-up Form

Validation-first sign-up flow wrapped in a terminal-style interface with animated canvas background.

[![Live app](https://img.shields.io/badge/live-SignUpForm-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://itkrivoshei.github.io/react-typescript-web-apps/#/SignUpForm)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white)](../../../README.md#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](../../../tsconfig.json)
[![Canvas](https://img.shields.io/badge/canvas-matrix%20rain-e34f26?style=for-the-badge&logo=html5&logoColor=white)](SignUpForm.tsx)
[![SCSS](https://img.shields.io/badge/SCSS-terminal%20UI-cf649a?style=for-the-badge&logo=sass&logoColor=white)](SignUpForm.scss)

</div>

## Highlights

| Focus         | Details                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Validation    | Required fields, email format, phone format, password complexity, and password confirmation are checked on submit. |
| Input polish  | Phone numbers auto-format to `xxx-xxx-xxxx` while preserving a numeric mobile keyboard.                            |
| Accessibility | Inputs use autocomplete, `aria-invalid`, and field-specific error descriptions.                                    |
| Visual system | Canvas matrix rain runs behind a split terminal card and form layout.                                              |

## Source Map

| File                               | Purpose                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| [SignUpForm.tsx](SignUpForm.tsx)   | Form data model, validation, phone formatting, submit state, and canvas animation. |
| [SignUpForm.scss](SignUpForm.scss) | Terminal shell, responsive form layout, matrix canvas, and validation states.      |
| [index.ts](index.ts)               | Feature export used by the app router.                                             |
