// PortFolioTheme.jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const HeaderAppBar_Light = createTheme({
  palette: {
    // mode: 'light',
    primary: {
      main: '#6699cc',
      contrastText: '#cc9966',
    },  
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const MainContent_Light = createTheme({
  // palette: {
  //   // mode: 'light',
  //   primary: {
  //     main: '#676767',
  //     contrastText: '#121212',
  //   },
  // },
  // typography: {
  //   fontFamily: 'Roboto, sans-serif',
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