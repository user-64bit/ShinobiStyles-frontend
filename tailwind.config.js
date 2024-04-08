/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        keyframes: {
            infitineSlide: {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
            },
        },
        animation: {
            slider: "infitineSlide 20s linear infinite",
        },
    },
    darkMode: "class",
    theme: {
        extend: {},
    },
};
export const plugins = [];
