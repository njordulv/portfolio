import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#0f0d0e',
        yellow: '#fcba28',
        pink: '#f38ba3',
        green: '#0ba95b',
        purple: '#7b5ea7',
        beige: '#f9f4da',
        blue: '#12b5e5',
        orange: '#fc7428',
        red: '#ed203d',
        primary: '#12b5e5',
        secondary: '#7b5ea7',
        success: '#0ba95b',
        danger: '#ed203d',
      },
      boxShadow: {
        xl: '4px 4px 0 black',
        lg: '2px 2px 0 beige',
      },
      dropShadow: {
        sm: '1px 1px 0 black',
        md: '2px 2px 0 black',
        lg: '4px 0px 0 black',
        xl: '6px -5px 0 black',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: 'beige',
            contrast: 'white',
            coal: '#fffef2',
            charcoal: '#555',
            default: '#0f0d0e',
            color: '#333',
            warning: '#fcba28',
            zinc: { 400: '#71717a' },
          },
        },
        dark: {
          colors: {
            background: '#181818',
            contrast: 'black',
            coal: '#0f0d0e',
            charcoal: '#231f20',
            default: '#f9f4da',
            color: '#f9f4da',
            warning: '#fcba28',
            zinc: { 400: '#a1a1aa' },
          },
        },
      },
    }),
  ],
}
