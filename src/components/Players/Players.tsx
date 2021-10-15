import axios from "../../lib/axiosConfig";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Players.module.scss";
function Players() {
  const [jugadores, setJugadores]: any = useState([]);

  const players = async () => {
    const data = await axios.get("http://localhost:3001/player");
    var res = await data.data;
    setJugadores(res);
  };
  useEffect(() => {
    players();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Jugadores</h1>
      <table className={styles.jugadores}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Posicion</th>
            <th>Calificacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((p: any) => {
            return (
              <tr>
                <td>
                  <Link to="/jugador">
                    <img className={styles.imagenTabla} src={p.image} alt="" />
                  </Link>
                </td>
                <td>
                  <Link to="/jugador">{p.name}</Link>
                </td>
                <td>{p.gender}</td>
                <td>{p.position}</td>
                <td>{p.qualification} / 5</td>
                <td>
                  <form>
                    <input
                      className={`${styles.boton} ${styles.botonInvitar}`}
                      type="submit"
                      name=""
                      value="Invitar"
                    />
                    <input
                      className={`${styles.boton} ${styles.botonCalificar}`}
                      type="submit"
                      value="Calificar"
                    />
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Players;
