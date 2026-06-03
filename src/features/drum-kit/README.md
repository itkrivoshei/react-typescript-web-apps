<div align="center">

# Drum Kit Sound Pad

Keyboard sampler with A-L pads, instant audio retriggering, and animated hit feedback.

[![Live app](https://img.shields.io/badge/live-DrumKit-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0f172a)](https://itkrivoshei.github.io/react-typescript-web-apps/#/DrumKit)
[![Gallery](https://img.shields.io/badge/gallery-root%20README-111827?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/itkrivoshei/react-typescript-web-apps#app-gallery)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111&labelColor=0f172a)](../../../package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0f172a)](../../../tsconfig.json)
[![Audio](https://img.shields.io/badge/Audio-HTML5%20samples-e34f26?style=for-the-badge&logo=html5&logoColor=white&labelColor=0f172a)](DrumKit.tsx)
[![SCSS](https://img.shields.io/badge/SCSS-pad%20animation-cf649a?style=for-the-badge&logo=sass&logoColor=white&labelColor=0f172a)](DrumKit.scss)

</div>

## Highlights

| Focus         | Details                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Pad mapping   | Nine pads map A, S, D, F, G, H, J, K, and L to drum samples.                                     |
| Fast playback | Audio refs reset `currentTime` before each play so repeated hits feel immediate.                 |
| Sound design  | The G pad reuses the kick sample with lower volume and playback rate for a low-kick variation.   |
| Interaction   | Pads respond to keyboard and click input, then clear the playing state after CSS transition end. |

## Source Map

| File                               | Purpose                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| [`DrumKit.tsx`](DrumKit.tsx)       | Pad data, keyboard listeners, audio refs, and playback behavior. |
| [`DrumKit.scss`](DrumKit.scss)     | Background image, sampler layout, key states, and hit animation. |
| [`background.jpg`](background.jpg) | Feature background image.                                        |
| [`index.ts`](index.ts)             | Feature export used by the app router.                           |
