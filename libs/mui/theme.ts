'use client'

import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
export { ThemeProvider } from '@mui/material/styles'
import { COLORS } from '@/enums'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  palette: {
    primary: {
      light: '#c8bc9a',
      main: '#bbac81',
      dark: '#82785a',
    },
    secondary: {
      light: '#7a7877',
      main: '#595756',
      dark: '#3e3c3c',
    },
    success: {
      main: COLORS.SALEM,
    },
    error: {
      main: '#f94748',
    },
    text: {
      primary: COLORS.SHARK,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
