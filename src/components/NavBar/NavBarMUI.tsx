import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import logo from "../../visuales/fondoPotrero.png";
import MenuHamburguesa from "./MenuHamburguesa";

const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#37003c",
    },
    secondary: {
      main: "#ad1457",
    },
  },
});

export default function NavBarMui() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={purpleTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuHamburguesa />
            </IconButton>
            <Button color="inherit">
              <Link to="/home">Home </Link>
            </Button>
            <Button color="inherit">
              <Link to="/canchas">Canchas</Link>
            </Button>
            <Button color="inherit">
              <Link to="/equipo">Crear equipo</Link>
            </Button>

            <Button sx={{ mx: 35 }}>
              <Link to="/home">
                <img style={{ background: "white" }} src={logo} alt="logo" />
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/contacto">Contacto</Link>
            </Button>
            <Button color="inherit">
              <Link to="/login">Iniciar sesion</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
