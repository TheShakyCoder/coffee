import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Coffee — roasted bean browns, used as the primary brand colour.
                brand: {
                    50:  '#faf6f2',
                    100: '#f0e6db',
                    200: '#e0cab3',
                    300: '#c9a682',
                    400: '#b07d4f',
                    500: '#8a5a2b',
                    600: '#6f4422',
                    700: '#57341b',
                    800: '#3f2615',
                    900: '#2a190e',
                },
                // Caramel / golden crema accent.
                accent: {
                    50:  '#fffbeb',
                    100: '#fff3c4',
                    200: '#ffe588',
                    300: '#ffd43b',
                    400: '#ffc107',
                    500: '#f5a623',
                    600: '#e09100',
                    700: '#b87300',
                },
                // Supporting tones for cards, badges and accents.
                bean: {
                    espresso: '#2a190e',
                    mocha:    '#6f4422',
                    caramel:  '#b07d4f',
                    crema:    '#e8d4b8',
                    sage:     '#7c8a6b',
                    leaf:     '#5b7553',
                    rust:     '#b5552d',
                    gold:     '#d8a13a',
                },
                warm: {
                    50:  '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate, 0deg))' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-30px) rotate(var(--tw-rotate, 0deg))' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-6deg)' },
                    '50%': { transform: 'rotate(6deg)' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.08)' },
                },
            },
            animation: {
                float: 'float 4s ease-in-out infinite',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'float-delayed': 'float 5s ease-in-out 1s infinite',
                wiggle: 'wiggle 2s ease-in-out infinite',
                'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
            },
        },
    },

    plugins: [forms, typography],
};
