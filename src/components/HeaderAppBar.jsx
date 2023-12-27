// HeaderAppBar.jsx
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Button, IconButton, Typography, CssBaseline, Box, Menu, MenuItem, Link, } from "@mui/material";
import PropTypes from 'prop-types';
import { Route, Routes, MemoryRouter, useLocation, } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const pages = ["About Me", "Online CV", "Projects", "Contact Me"];

const NavItem = ({ page, onClick }) => {
    return (
      <MenuItem key={page} onClick={() => {
        onClick();
        // Update the BodyContent component
        dispatch({ type: 'NAVIGATE_TO', page: page });
      }}>
        <Link
          to={"/" + page.replace(/\s/g, "").toLowerCase()}
          underline="hover"
          className="nav-link"
        >
          {page}
        </Link>
      </MenuItem>
    );
  };

export const HeaderAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" sx={{ maxWidth: "98%", left: "50%", transform: "translateX(-50%)", top: "0px", }}>
                        <Toolbar>
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu} sx={{ mr: 2 }} >
                                <MenuIcon />
                            </IconButton>
                            <Box >
                                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left", }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left", }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Link
                                                // href="#"
                                                underline="hover" to={"/" + page.replace(/\s/g, "").toLowerCase()}>{page}</Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Toolbar variant="dense" />
                </Box>
            </>
        </>
    );
};





// import React from 'react';
// import { Box, Menu, MenuItem } from '@mui/material';

// const pages = ["About Me", "Online CV", "Projects", "Contact Me"];
// const [anchorElNav, setAnchorElNav] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

// const NavItem = ({ page, onClick }) => {
//   return (
//     <MenuItem key={page} onClick={() => {
//       onClick();
//       // Update the BodyContent component
//       dispatch({ type: 'NAVIGATE_TO', page: page });
//     }}>
//       <Link
//         to={"/" + page.replace(/\s/g, "").toLowerCase()}
//         underline="hover"
//         className="nav-link"
//       >
//         {page}
//       </Link>
//     </MenuItem>
//   );
// };

// function HeaderAppBar() {
//   const handleMenuToggle = () => setAnchorElNav(!Boolean(anchorElNav));

//   return (
//     <Box >
//       <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left", }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left", }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} >
//         {pages.map((page) => (
//           <NavItem key={page} page={page} onClick={handleMenuToggle} />
//         ))}
//       </Menu>
//     </Box>
//   );
// }

// export default HeaderAppBar;
