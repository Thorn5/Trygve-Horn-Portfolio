// PortFolioTheme.jsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const PortFolioTheme = ({ children }) => {
  // Create a custom theme using createTheme()
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0099cc',
      },
      secondary: {
        main: '#009966',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};
