// PortFolioTheme.jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Theme = createTheme({
  components: { // fixes body text underrunning app-bar
    MuiToolbar: { styleOverrides: { dense: { height: 36, minHeight: 36 } } },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#46bbec',
      contrastText: '#5ef75e',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#c8d0dc',
      default: '#787b81',
    },
  },
  // typography: {
  //   fontFamily: '"Red Hat Display", "Roboto", "Helvetica", "Arial", "sans-serif"',
  // },
});

// eslint-disable-next-line react/prop-types
export const PortFolioTheme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}