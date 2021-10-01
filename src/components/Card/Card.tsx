import * as React from "react";
import image from "../../visuales/canchitaCard.png";
import styles from "../Card/Card.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      
      main: "#1e88e5",
    },
  },
});

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="Img not found" />
      </div>
      <div className={styles.info}>
        <p>Serrano Corner</p>
        <span>Serrano 250, Capital Federal</span>
      </div>
      <div className={styles.selectHora}>
        <select>
          <option>Horario</option>
          <option>18:00hs</option>
          <option>19:00hs</option>
          <option>20:00hs</option>
          <option>21:00hs</option>
        </select>
      </div>
      <div className={styles.selectFecha}>
        <select>
          <option>Fecha</option>
          <option>Martes</option>
          <option>Miercoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
        </select>
      </div>
      <div className={styles.button}>
      <Box sx={{ "& button": { m: 1 } }}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" size="small">
          Reservar
        </Button>
        </ThemeProvider>
      </Box>
      </div>
    </div>
  );
}
