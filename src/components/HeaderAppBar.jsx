// HeaderAppBar.jsx
import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  CssBaseline,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Blip", "Blop", "Blog", "Goz"];

export const HeaderAppBar = (props) => {
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
          <AppBar
            position="fixed"
            sx={{ maxWidth: "98%", left: "50%", transform: "translateX(-50%)", top: "0px", }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
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
          <Toolbar variant="dense" />{" "}
        </Box>
      </>

      <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{ maxWidth: "98%", left: "50%", transform: "translateX(-50%)", top: "75px", }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Box>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography variant="h6" component="div">
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
