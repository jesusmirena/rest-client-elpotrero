import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useUser from "../../hooks/useUser";
import { putUser, resetUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styles from "./NavBarMUI.module.scss";
import axios from "axios";

type Anchor = "top" | "left" | "bottom" | "right";

export default function MenuHamburguesa() {
  const { logout, isLogged } = useUser();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser]: any = useState([]);
  const [flag, setFlag] = useState(true);
  const id = window.sessionStorage.getItem("id");

  const player = async () => {
    const data = await axios.get("http://localhost:3001/user?id=" + id);
    var res = await data.data;
    setUser(res);
  };

  function handleLogout() {
    logout();
    dispatch(resetUser());

    history.push("/");
  }

  function handleViewProfile() {
    history.push("/profile");
  }
  // function handleViewTeam() {
  //   history.push("/profile");
  // }

  function handleCrearEquipo() {
    history.push("/crearequipo");
  }

  function handlePlaying(e: any) {
    e.preventDefault();
    dispatch(putUser(id, { player: { available: true } }));
    setFlag(!flag);
  }

  function handleNoPlaying(e: any) {
    e.preventDefault();
    dispatch(putUser(id, { player: { available: false } }));
    setFlag(!flag);
  }

  function handleMisEquipos() {
    history.push("/teamsId");
  }

  function handleReservaCancha() {
    history.push("/home");
  }
  function handleMisNotificaciones() {
    history.push("/notificaciones");
  }
  function handleMisReservas() {
    history.push("/misreservas");
  }
  function handleInvitarJugadoresDisponibles() {
    history.push("/disponibles");
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

  useEffect(() => {
    player();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleViewProfile}
            primary="Ver perfil"
          />
        </ListItem>
        {user.player?.available ? (
          <ListItem>
            <Button
              style={{
                backgroundColor: "#b62121",
                fontSize: "12px",
              }}
              onClick={handleNoPlaying}
              variant="contained"
            >
              NO QUIERO JUGAR
            </Button>
          </ListItem>
        ) : (
          <ListItem>
            {/* <ListItemText className={styles.link} onClick={handlePlaying} primary="Quiero jugar!" /> */}
            <Button
              style={{
                backgroundColor: "#21b649",
                fontSize: "12px",
              }}
              onClick={handlePlaying}
              variant="contained"
            >
              QUIERO JUGAR
            </Button>
          </ListItem>
        )}
        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleMisNotificaciones}
            primary="Mis notificaciones"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleMisReservas}
            primary="Mis reservas"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleMisEquipos}
            primary="Mis equipos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleCrearEquipo}
            primary="Crear equipo"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleInvitarJugadoresDisponibles}
            primary="Me falta uno"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            className={styles.link}
            onClick={handleReservaCancha}
            primary="Ir a Home"
          />
        </ListItem>
        <ListItem>
          <Button
            style={{
              backgroundColor: "#b62121",
              fontSize: "12px",
            }}
            onClick={handleLogout}
            variant="contained"
          >
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
