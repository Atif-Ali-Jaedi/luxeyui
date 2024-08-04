<p align="center">
    <img src="https://luxeyui.vercel.app/logo.png" alt="luxeyUI Logo" width="64" />
    <h1 align="center">LuxeyUI</h1>
</p>
<p align="center">
    <img src="https://img.shields.io/npm/l/luxeyui?style=flat" alt="License" />
    <img src="https://img.shields.io/npm/v/luxeyui?style=flat&logo=npm&label=version&color=lincolngreen" alt="NPM Version" />
    <img src="https://img.shields.io/badge/downloads-1.8k+-malachite" alt="Downloads" />
</p>

A TailwindCSS UI component library built on top of PostCSS and TypeScript. It features components inspired by [shadcn/ui](https://ui.shadcn.com) and [@nextui-org](https://nextui.org), tailored for non-react use.

> **Note:** This project is early access. Expect some bugs to occur and more components to be added in the future.

## Getting Started

To kick off, use the CDN for now since the components aren't usable individually. Utilize TailwindCSS for better customization. For full installation process, please visit [https://luxeyui.vercel.app/docs/installation](https://luxeyui.vercel.app/docs/installation).

### CDN 

```html 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.5.1/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.5.1/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
npm i luxeyui@latest
```

## What's New in v0.5.0 & v0.5.1?

### Bug fixed

- **Skeleton**: Now it has the full functionality with the attribute `data-loaded="true"`. Solved the specificity issue where `data-loaded="true"` didn't work on the `::before` and `::after`. 

### New components

- **Spinner**: Spinner express an unspecified wait time or display the length of a process.
- **Circular Progress**: Circular progress indicators are utilized to indicate an undetermined wait period or visually represent the duration of a process.
- **Image**: The Image component is used to display images with support for fallback.

> **Note**: For the full list of changes, visit [https://luxeyui.vercel.app/docs/changelog](https://luxeyui.vercel.app/docs/changelog).

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app/introduction](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
