<img src="https://luxeyui.vercel.app/logo.png" alt="luxeyUI Logo" width="64"/>
<br/>
<img src="https://img.shields.io/npm/l/luxeyui?style=flat" alt="License"/>

# LuxeyUI

LuxeyUI is a tailwindCSS UI component library built on top of PostCSS and
TypeScript. It features components inspired by
[shadcn-ui](https://ui-shadcn.com) and [@nextui-org](https://nextui.org),
tailored for non-react use.

> **Note:** This project is currently under development and is early access. Expect more components
> to be added in the future. Stay tuned! 😀

## Getting Started

To kick off, use the CDN for now since the components aren't usable
individually. You can also use this library with VITE. Full functionality will be available after the 1st full release.
Utilize TailwindCSS for better customization.

### CDN 

```html 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.4.0/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.4.0/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
npm i luxeyui@latest
```

## What's New in v0.4.0 and v0.4.1?

**New components**

- **Progress**: Used to display the amount of progress.
- **Scroll Shadow**: Used to display a shadow while scrolling. 
- **KBD**: Used to display keyboard keys.
- **Checkbox Group**: Used to display a list/group of checkboxes.

**Fixed**

- Changed `radio-group-label` color, `text-foreground/70 → text-default-700`.
- Solved an specificity issue caused by the css `:not()` selector in the progress component, `&:not(&[data-indeterminate]) > .track → & > .track`.

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
