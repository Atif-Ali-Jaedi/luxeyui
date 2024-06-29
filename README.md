<img src="https://cdn.discordapp.com/attachments/1218908036614193213/1256598235364200542/logo.png?ex=668159cd&is=6680084d&hm=b2c47551fb582b35be7599f0c62c094af64c72194c30bd57db49f684b9e1eaf1&" alt="luxeyUI Logo" width="64"/>
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.3.0/dist/all.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.3.0/dist/all.min.js" defer></script>
```

### Vite

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
npm i luxeyui@latest
```

## What's New in v0.3.0?

- **Dark Mode**: After a long time I finally added dark mode. 
- **Theming**: The ability to customize the original theme colors within your css by using css variables. 
- **Better** Customization: Now, it's a lot easier to customize the components. 
- **Input**: Added the most requested component "input".
- **Components**: Fixed the badge and the button component. Also remade entirely the card and the textarea component and Adjusted all the components for darkmode. 

## Documentation

For comprehensive documentation, visit
[https://luxeyui.vercel.app](https://luxeyui.vercel.app).

## License

Licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
