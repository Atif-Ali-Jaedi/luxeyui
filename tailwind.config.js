/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./dist/all.min.js"],
	theme: {
		extend: {
			colors: {
				layout: {
					background: "hsla(var(--layout-background) / <alpha-value>)",
					foreground: "hsla(var(--layout-foreground) / <alpha-value>)",
					divider: "hslaa(var(--layout-divider))",
					focus: "hsla(var(--layout-focus) / <alpha-value>)"
				},
				content: {
					1: "hsla(var(--content-1) / <alpha-value>)",
					2: "hsla(var(--content-2) / <alpha-value>)",
					3: "hsla(var(--content-3) / <alpha-value>)",
					4: "hsla(var(--content-4) / <alpha-value>)"
				},
				base: {
					default: "hsla(var(--base-default) / <alpha-value>)",
					foreground: "hsla(var(--base-foreground) / <alpha-value>)",
					foreground_light:
						"hsla(var(--base-foreground-light) / <alpha-value>)",
					primary: "hsla(var(--base-primary) / <alpha-value>)",
					secondary: "hsla(var(--base-secondary) / <alpha-value>)",
					success: "hsla(var(--base-success) / <alpha-value>)",
					warning: "hsla(var(--base-warning) / <alpha-value>)",
					danger: "hsla(var(--base-danger) / <alpha-value>)"
				},
				default: {
					50: "hsla(var(--default-50) / <alpha-value>)",
					100: "hsla(var(--default-100) / <alpha-value>)",
					200: "hsla(var(--default-200) / <alpha-value>)",
					300: "hsla(var(--default-300) / <alpha-value>)",
					400: "hsla(var(--default-400) / <alpha-value>)",
					500: "hsla(var(--default-500) / <alpha-value>)",
					600: "hsla(var(--default-600) / <alpha-value>)",
					700: "hsla(var(--default-700) / <alpha-value>)",
					800: "hsla(var(--default-800) / <alpha-value>)",
					900: "hsla(var(--default-900) / <alpha-value>)"
				},
				primary: {
					50: "hsla(var(--primary-50) / <alpha-value>)",
					100: "hsla(var(--primary-100) / <alpha-value>)",
					200: "hsla(var(--primary-200) / <alpha-value>)",
					300: "hsla(var(--primary-300) / <alpha-value>)",
					400: "hsla(var(--primary-400) / <alpha-value>)",
					500: "hsla(var(--primary-500) / <alpha-value>)",
					600: "hsla(var(--primary-600) / <alpha-value>)",
					700: "hsla(var(--primary-700) / <alpha-value>)",
					800: "hsla(var(--primary-800) / <alpha-value>)",
					900: "hsla(var(--primary-900) / <alpha-value>)"
				},
				secondary: {
					50: "hsla(var(--secondary-50) / <alpha-value>)",
					100: "hsla(var(--secondary-100) / <alpha-value>)",
					200: "hsla(var(--secondary-200) / <alpha-value>)",
					300: "hsla(var(--secondary-300) / <alpha-value>)",
					400: "hsla(var(--secondary-400) / <alpha-value>)",
					500: "hsla(var(--secondary-500) / <alpha-value>)",
					600: "hsla(var(--secondary-600) / <alpha-value>)",
					700: "hsla(var(--secondary-700) / <alpha-value>)",
					800: "hsla(var(--secondary-800) / <alpha-value>)",
					900: "hsla(var(--secondary-900) / <alpha-value>)"
				},
				success: {
					50: "hsla(var(--success-50) / <alpha-value>)",
					100: "hsla(var(--success-100) / <alpha-value>)",
					200: "hsla(var(--success-200) / <alpha-value>)",
					300: "hsla(var(--success-300) / <alpha-value>)",
					400: "hsla(var(--success-400) / <alpha-value>)",
					500: "hsla(var(--success-500) / <alpha-value>)",
					600: "hsla(var(--success-600) / <alpha-value>)",
					700: "hsla(var(--success-700) / <alpha-value>)",
					800: "hsla(var(--success-800) / <alpha-value>)",
					900: "hsla(var(--success-900) / <alpha-value>)"
				},
				warning: {
					50: "hsla(var(--warning-50) / <alpha-value>)",
					100: "hsla(var(--warning-100) / <alpha-value>)",
					200: "hsla(var(--warning-200) / <alpha-value>)",
					300: "hsla(var(--warning-300) / <alpha-value>)",
					400: "hsla(var(--warning-400) / <alpha-value>)",
					500: "hsla(var(--warning-500) / <alpha-value>)",
					600: "hsla(var(--warning-600) / <alpha-value>)",
					700: "hsla(var(--warning-700) / <alpha-value>)",
					800: "hsla(var(--warning-800) / <alpha-value>)",
					900: "hsla(var(--warning-900) / <alpha-value>)"
				},
				danger: {
					50: "hsla(var(--danger-50) / <alpha-value>)",
					100: "hsla(var(--danger-100) / <alpha-value>)",
					200: "hsla(var(--danger-200) / <alpha-value>)",
					300: "hsla(var(--danger-300) / <alpha-value>)",
					400: "hsla(var(--danger-400) / <alpha-value>)",
					500: "hsla(var(--danger-500) / <alpha-value>)",
					600: "hsla(var(--danger-600) / <alpha-value>)",
					700: "hsla(var(--danger-700) / <alpha-value>)",
					800: "hsla(var(--danger-800) / <alpha-value>)",
					900: "hsla(var(--danger-900) / <alpha-value>)"
				}
			},
			scale: { "97": "0.97" },
			borderRadius: {"14":"14px"}
		}
	},
	plugins: []
};
