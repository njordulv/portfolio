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
        coal: '#0f0d0e',
        charcoal: '#231f20',
        gray: '#262522',
        yellow: '#fcba28',
        pink: '#f38ba3',
        green: '#0ba95b',
        purple: '#7b5ea7',
        beige: '#f9f4da',
        blue: '#12b5e5',
        orange: '#fc7428',
        red: '#ed203d',
        white: '#ffffff',
        primary: '#12b5e5',
        success: '#0ba95b',
        warning: '#fc7428',
        danger: '#ed203d',
        foreground: '#262522',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
