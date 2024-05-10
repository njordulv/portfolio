import { Paytone_One as FontMono, Outfit as FontSans } from 'next/font/google'

export const fontMono = FontMono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
})

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
