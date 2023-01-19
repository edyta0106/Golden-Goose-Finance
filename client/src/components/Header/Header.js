import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function ButtonAppBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#546E7A" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          {Auth.loggedIn() !== true ? (
            <>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/signup">Sign Up</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/login">Log In</Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/dashboard">Dashboard</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/bills">Bills</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/spending">Spending</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/savings">Savings</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {/* Create route to link this button */}
                  <Link to="/settings">Settings</Link>
                </MenuItem>
                <MenuItem>
                  <LogoutIcon onClick={logout} />
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
