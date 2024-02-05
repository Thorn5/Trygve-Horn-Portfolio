// HeaderAppBar.jsx
// /* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, CssBaseline, Box, Menu, MenuItem, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    setSelectedLink(link);
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            maxWidth: "98%",
            left: "50%",
            transform: "translateX(-50%)",
            top: "0px",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              sx={{ mr: 2 }}
            >
              {" "}
              <MenuIcon />{" "}
            </IconButton>
            <Box>
              <nav>
                <Menu // creates Popover menu containing MenuItems
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  <MenuItem // Landing
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/"
                    onClick={() => handleClose("/AboutMe")}
                  >
                    Home/ Landing
                  </MenuItem>
                  <MenuItem // AboutMe
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/AboutMe"
                    onClick={() => handleClose("/AboutMe")}
                  >
                    About Me
                  </MenuItem>
                  <MenuItem // TrygveHornCV
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/TrygveHornCV"
                    onClick={() => handleClose("/TrygveHornCV")}
                  >
                    Online CV
                  </MenuItem>
                  <MenuItem // Projects
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/Projects"
                    onClick={() => handleClose("/Projects")}
                  >
                    Projects
                  </MenuItem>
                  <MenuItem // AboutSite
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/AboutSite"
                    onClick={() => handleClose("/AboutSite")}
                  >
                    About This Site
                  </MenuItem>
                  <MenuItem // Contact
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    component={NavLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        // color: isActive ? "black" : "grey",
                      };
                    }}
                    to="/Contact"
                    onClick={() => handleClose("/Contact")}
                  >
                    Contact Me
                  </MenuItem>
                </Menu>
              </nav>
            </Box>
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
