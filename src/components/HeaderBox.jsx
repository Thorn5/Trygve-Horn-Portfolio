// HeaderBox.jsx

import React from 'react'
import { Box } from '@mui/material';

export const HeaderBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        bgcolor: 'primary.main',
        bgcolor: 'secondary.main',
        color: 'primary.contrastText',
        zIndex: 9999,
      }}
    >
      <h2>Portfolio and Online CV of (Anthony) Trygve Horn</h2>
    </Box>
  );

}



