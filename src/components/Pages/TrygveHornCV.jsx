// TrygveHornCV.jsx
// import React from 'react'
// import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, CssBaseline, Box, Menu, MenuItem, } from "@mui/material";

export const TrygveHornCV = () => {
  return (
    <div>
      {/* <iframe src="../src/assets/Pdf/Curriculum Vitae - A. Trygve Horn.pdf" width="100%" height="500px" > </iframe> */}
      {/* <Box style={{height: "calc(100vh - 100px)"}}> */}
       <iframe
     src="../src/assets/Pdf/Curriculum Vitae - A. Trygve Horn.pdf"
     style={{ width: "100%", height: "calc(100vh - 108px)" }}
     >
   </iframe>
     {/* </Box> */}
    </div>
  )
}
