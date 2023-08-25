import Result from '@/components/Result'
import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h3: {
      fontWeight: 900
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#a43936',
      darker: '#75211f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#333',
      darker: '#222',
      contrastText: '#fff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5
        }
      }
    }
  }
})

export default function Home() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Result date="26 de agosto" />
      </ThemeProvider>
    </Container>
  )
}
