// // HeaderAppBar.jsx Obselete Version
// import * as React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { AppBar, Toolbar, Button, IconButton, Typography, CssBaseline, Box, Menu, MenuItem, Link, } from "@mui/material";

// const pages = ["About Me", "Online CV", "Projects", "Contact Me"];

// const NavItem = ({ page, onClick }) => {
//     return (
//       <MenuItem key={page} onClick={() => {
//         onClick();
//         // Update the BodyContent component
//         dispatch({ type: 'NAVIGATE_TO', page: page });
//       }}>
//         <Link
//           to={"/" + page.replace(/\s/g, "").toLowerCase()}
//           underline="hover"
//           className="nav-link"
//         >
//           {page}
//         </Link>
//       </MenuItem>
//     );
//   };

// export const HeaderAppBar = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     return (
//         <>
//             <>
//                 <CssBaseline />
//                 <Box sx={{ flexGrow: 1 }}>
//                     <AppBar position="fixed" sx={{ maxWidth: "98%", left: "50%", transform: "translateX(-50%)", top: "0px", }}>
//                         <Toolbar>
//                             <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu} sx={{ mr: 2 }} >
//                                 <MenuIcon />
//                             </IconButton>
// <Box >
//     <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left", }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left", }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} >
//         {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Link
//                     underline="hover" to={"/" + page.replace(/\s/g, "").toLowerCase()}>{page}</Link>
//             </MenuItem>
//         ))}
//     </Menu>
// </Box>
//                             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                                 News
//                             </Typography>
//                             <Button color="inherit">Login</Button>
//                         </Toolbar>
//                     </AppBar>
//                     <Toolbar variant="dense" />
//                 </Box>
//             </>
//         </>
//     );
// };

// HeaderAppBar.jsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";


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
