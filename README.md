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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.3.2/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.3.2/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
npm i luxeyui@latest
```

## What's New in v0.3.2 & v0.3.3?

**Input (Updated)**:
 - Adjusted the border width, `2.5px → 2px`
 - Adjusted the radius for `sizes` & `radiuses` 
 - Added the `helper-wrapper`
 - Added the `description` & `error-msg` for `helper-wrapper`
 - Added validation for the input to display error only when needed. 
 - Fixed and issue higher the colours of the borders doesn't appear on focus because of the specificity issue.
 - Added transparent background instead of just solid background, `bg-layout-background → bg-transparent`.
 - Added a gap between the content before / after the `input`, inside `inner-wrapper`, `gap-px → gap-1.5`.

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
