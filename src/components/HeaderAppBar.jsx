// HeaderAppBar.jsx
import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, CssBaseline, Box, Menu, MenuItem, Link, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderAppBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ maxWidth: "98%", left: "50%", transform: "translateX(-50%)", top: "0px", }}>
          <Toolbar> <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} >
              <MenuItem sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={handleClose}>Online CV</MenuItem>
              <MenuItem sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={handleClose}>About Me</MenuItem>
              <MenuItem sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={handleClose}>Projects</MenuItem>
              <MenuItem sx={{ '&:hover': { textDecoration: 'underline' } }} onClick={handleClose}>Contact Me</MenuItem>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CV and Portfolio of A. Trygve Horn
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar variant="dense" />
      </Box>
    </>
  );
};
