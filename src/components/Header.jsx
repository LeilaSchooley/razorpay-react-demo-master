import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Header.css"; // Import the new CSS file

export default function Header({ title = "Carfax Report" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar">
        {/* Menu Icon for Mobile */}
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* App Title */}
        <Typography variant="h6" component="div" className="title">
          {title}
        </Typography>

        {/* Login Button */}
        <Box>
          <Button color="inherit" className="login-button">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
