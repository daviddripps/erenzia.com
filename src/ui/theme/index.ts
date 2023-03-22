import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '42px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '1.15rem',
          marginBottom: '0.75rem',
        },
        h1: {
          fontSize: '2rem',
          marginBottom: '1rem',
        },
        h2: {
          fontSize: '1.75rem',
          fontWeight: '400',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fdfcff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
