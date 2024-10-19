<p align="center">
    <img src="https://luxeyui.vercel.app/logo.png" alt="luxeyUI Logo" width="64" />
    <h1 align="center">LuxeyUI</h1>
</p>
<p align="center">
    <img src="https://img.shields.io/npm/l/luxeyui?style=flat" alt="License" />
    <img src="https://img.shields.io/npm/v/luxeyui?style=flat&logo=npm&label=version&color=lincolngreen" alt="NPM Version" />
    <img src="https://img.shields.io/badge/downloads-3.5k+-malachite" alt="Downloads" />
</p>

A TailwindCSS UI component library built on top of PostCSS and TypeScript. It features components inspired by [shadcn/ui](https://ui.shadcn.com) and [@nextui-org](https://nextui.org), tailored for non-react use.

> **Note:** This library is early access. Expect some bugs to occur and more components to be added in the future. Also a brand new website for documentation will be published in a few days.

## Getting Started

To kick off, use the CDN for now since the components aren't usable individually. Utilize TailwindCSS for better customization. For full installation process, please visit [https://luxeyui.vercel.app/docs/installation](https://luxeyui.vercel.app/docs/installation).

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.6.2/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.6.2/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i luxeyui@latest
```

## What's New in v0.6.2?

- Added support for disabling the `checkbox-group`, `radio-group` and `button-group`.
- Made the asterisk appear after the group-label in `checkbox-group` when using the `data-required` attribute.
- Now the validity of the `checkbox-group` and `radio-group` is based on the `data-invalid` attribute of the group.
- **Accordion**:
  - Now the indicator animation of the accordion item can be disabled by setting the `data-disable-indicator-animation` attribute.
  - Instead of changing the display property when using the `data-disable-animation` attribute, only disabling the transition effect.
  - Now the divider after each items can be disabled by setting the `data-show-divider` attribute.
- Now you can customize the close icon of the chip.
- Now the ripple effect of the card will only trigger when using the `data-pressable` attribute is `true` and `data-disable-ripple` attribute is not set to `true`. But when clicking any clickable elements in the card won't trigger the ripple effect.

> **Note**: For the full list of changes, visit [https://luxeyui.vercel.app/docs/changelog](https://luxeyui.vercel.app/docs/changelog).

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app/introduction](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
