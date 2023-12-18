// HeaderAppBar.jsx
import * as React from "react";
import PropTypes from 'prop-types';
import MenuIcon from "@mui/icons-material/Menu";
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
  Link,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  InboxIcon,
  DraftsIcon,
} from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';


const pages = ["About Me", "Online CV", "Projects", "Contact Me"];

export const HeaderAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Router Code:
  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }
  
    return (
      <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }
  
  Router.propTypes = {
    children: PropTypes.node,
  };
  
  const Link = React.forwardRef(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });
  
  function ListItemLink(props) {
    const { icon, primary, to } = props;

    // End Router Code

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
                    <Link to={"/" + page.replace(/\s/g, "").toLowerCase()}>{page}</Link>
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
  );
};