<p align="center">
    <img src="https://luxeyui.vercel.app/logo.png" alt="luxeyUI Logo" width="64" />
    <h1 align="center">LuxeyUI</h1>
</p>
<p align="center">
    <img src="https://img.shields.io/npm/l/luxeyui?style=flat" alt="License" />
    <img src="https://img.shields.io/npm/v/luxeyui?style=flat&logo=npm&label=version&color=lincolngreen" alt="NPM Version" />
    <img src="https://img.shields.io/badge/downloads-4k+-malachite" alt="Downloads" />
</p>

A TailwindCSS UI component library built on top of PostCSS and TypeScript. It features components inspired by [shadcn/ui](https://ui.shadcn.com) and [@nextui-org](https://nextui.org), tailored for non-react use.

> **Note:** This library is early access. Expect some bugs to occur and more components to be added in the future. Also a brand new website for documentation will be published in this week.

## Getting Started

To kick off, use the CDN for now since the components aren't usable individually. Utilize TailwindCSS for better customization. For full installation process, please visit [https://luxeyui.vercel.app/docs/installation](https://luxeyui.vercel.app/docs/installation).

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.6.3/dist/index.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.6.3/dist/index.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i luxeyui@latest
```

## What's New in v0.6.3?

### New components

- **Alert**: Temporary notifications that provide concise feedback about an action or event.
- **Drawer**: Displays a panel that slides in from the edge of the screen, containing supplementary content.
- **Modal**: Displays a dialog with a custom content that requires attention or provides additional information.

### Bug FIxes

- Circular badge interferes with `size` classes.
- Improperly sized badges when using `data-one-char` attribute.


> **Note**: For the full list of changes, visit [https://luxeyui.vercel.app/docs/changelog](https://luxeyui.vercel.app/docs/changelog).

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app/introduction](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
