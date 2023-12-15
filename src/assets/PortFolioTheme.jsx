// PortFolioTheme.jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const HeaderBar = createTheme({
  components: { // fixes body text underrunning app-bar
    MuiToolbar: { styleOverrides: { dense: { height: 36, minHeight: 36 } } },
  },


  // palette: {
  //   mode: 'light',
  // },
  // typography: {
  //   fontFamily: '"Red Hat Display", "Roboto", "Helvetica", "Arial", "sans-serif"',
  // },
});

export const MainContent = createTheme({
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: '#1976d2',
  //     primary: '#1f175a',
  //   },
  //   secondary: {
  //     main: '#9c27b0',
  //   },
  //   background: {
  //     default: '#326cce', //BackGround Color
  //     paper: '#144db1',
  //   },
  //   text: {
  //     primary: '#43a047', //light green
  //   },
  // },
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