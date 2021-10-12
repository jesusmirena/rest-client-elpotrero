import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useUser from "../../hooks/useUser";
import { resetUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

type Anchor = "top" | "left" | "bottom" | "right";

export default function MenuHamburguesa() {
  const { logout, isLogged } = useUser();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    logout();
    dispatch(resetUser());
    history.push("/");
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Ver perfil" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Crear equipo" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reservar cancha" />
        </ListItem>
        <ListItem button>
          <Button onClick={handleLogout} variant="contained">
            Cerrar sesion
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {isLogged && (
        <div>
          {(["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}
