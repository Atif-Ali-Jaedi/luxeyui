<p align="center">
    <img src="https://luxeyui.vercel.app/logo.png" alt="luxeyUI Logo" width="64" />
    <h1 align="center">LuxeyUI</h1>
</p>
<p align="center">
    <img src="https://img.shields.io/npm/l/luxeyui?style=flat" alt="License" />
    <img src="https://img.shields.io/npm/v/luxeyui?style=flat&logo=npm&label=version&color=lincolngreen" alt="NPM Version" />
    <img src="https://img.shields.io/badge/downloads-3.3k+-malachite" alt="Downloads" />
</p>

A TailwindCSS UI component library built on top of PostCSS and TypeScript. It features components inspired by [shadcn/ui](https://ui.shadcn.com) and [@nextui-org](https://nextui.org), tailored for non-react use.

> **Note:** This library is early access. Expect some bugs to occur and more components to be added in the future. Also a brand new website for documentation will be published in a few days.

## Getting Started

To kick off, use the CDN for now since the components aren't usable individually. Utilize TailwindCSS for better customization. For full installation process, please visit [https://luxeyui.vercel.app/docs/installation](https://luxeyui.vercel.app/docs/installation).

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.6.1/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.6.1/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i luxeyui@latest
```

## What's New in v0.6.1?

- **Progress**: Added support for dynamic value management with transition.
- **Theme**: 
  - Added common colors from [NextUI's Theme](https://nextui.org/docs/customization/colors#common-colors).
  - Added common layout options from [NextUI's Default Layout](https://nextui.org/docs/customization/layout#default-layout).
- **Button**: Revised the entire component and made some changes, those are highlighted below:
  - Fixed an issue where the button's min width was being overridden by `min-w-max` class.
  - Fixed an issue where the `radius` classes did not work properly when using the `size` classes.
  - Fixed an issue where the radius of the buttons inside the button group was a bit off.
  - Added a feature where adjacent variant borders will be collapsed.
  - Fixed an issue where the `data-full-width` did not work for the button group.
  - Made sure that the variants has proper colors.
- Reduced file size using lightningcss and parcel as the bundler.
- **Checkbox**: Remade the component and structure.
- **Checkbox Group**: Adjusted styles according to the `Checkbox` configurations & styles.
- **Radio**: Remade the component and structure.

> **Note**: For the full list of changes, visit [https://luxeyui.vercel.app/docs/changelog](https://luxeyui.vercel.app/docs/changelog).

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app/introduction](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
