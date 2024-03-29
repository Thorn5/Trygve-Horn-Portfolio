// PortFolioTheme.jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const HeaderBar = createTheme({
  components: { // fixes body text underrunning app-bar
    MuiToolbar: { styleOverrides: { dense: { 
      height: 75, 
      minHeight: 75,
      paddingTop: 0,
    } } },
  },
});

export const MainContent = createTheme({
});


// eslint-disable-next-line react/prop-types
export const PortFolioTheme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}