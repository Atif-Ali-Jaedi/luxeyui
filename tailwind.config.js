import { commonColors } from "./colors/common";
import { semanticColors } from "./colors/semantic";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./dist/all.min.js"],
    theme: {
        extend: {
            fontSize: {
                tiny: "0.75rem",
                small: "0.875rem",
                medium: "1rem",
                large: "1.125rem",
            },
            opacity: {
                disabled: 0.5,
                hover: "var(--hover-opacity)",
            },
            borderRadius: {
                small: "8px",
                medium: "12px",
                large: "14px",
            },
            colors: {
                ...semanticColors,
                ...commonColors,
            },
            scale: { 97: "0.97" },
        },
    },
    plugins: [],
};
