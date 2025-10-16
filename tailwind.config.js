import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import plugin from "tailwindcss/plugin";
import typography from '@tailwindcss/typography'

const pluginRounded = plugin(function ({ addUtilities }) {
    const newUtilities = {
        '.rounded-custom': {
            'border-top-left-radius': '90rem',
            'border-top-right-radius': '60rem',
            'border-bottom-right-radius': '20rem',
            'border-bottom-left-radius': '28rem',
        },
    };
    addUtilities(newUtilities);
});

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                ml: "950px",
                mml: "850px", // Custom breakpoint dengan min-width
                xs: "500px",
                xxs: "300px",
            },
            backgroundColor: {
                "toska-light": "#21A4A4",
                "toska": "#1C8383",
                "toska-dark": "#146767",
            },
            colors: {
                "toska-light": "#21A4A4",
                "toska": "#1C8383",
                "toska-dark": "#146767",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        forms,
        pluginRounded,
        typography
    ],
};
