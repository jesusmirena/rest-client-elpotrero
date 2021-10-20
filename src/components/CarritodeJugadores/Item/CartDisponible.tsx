import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  postNotification,
  putTeam,
  resetCarrito,
} from "../../../redux/actions";
import styles from "./CartItem.module.scss";
export default function CartDisponible() {
  const jugadores = useSelector(
    (state: any) => state.carrito.carritoDisponible
  );
  try {
    var dates = useSelector((state: any) => state.carrito.fecha);
  } catch (err) {
    console.log(err);
  }
  const equipos = useSelector((state: any) => state.teams.teamsId);
  const hora = useSelector((state: any) => state.carrito.horario);

  const dispatch = useDispatch();

  const [state, setstate] = useState({
    name: equipos[0] ? equipos[0].name : "",
    image: equipos[0] ? equipos[0].image : "",
    available: true,
    player: [],
  });

  const [notification, setNotification] = useState({
    day: dates,
    hour: hora,
    duration: 1,
    team: equipos[0] ? equipos[0].id : "",
    player: [],
  });

  let arreglo: any = [];

  jugadores[0]
    ? jugadores.forEach((e: any) => {
        arreglo.push({ id: e.id });
      })
    : "";

  function handleSubmit(e: any) {
    dispatch(putTeam(equipos[0].id, state));
    dispatch(resetCarrito());
    dispatch(postNotification(notification));
  }

  useEffect(() => {
    setNotification({
      ...notification,
      player: arreglo,
    }),
      setstate({
        ...state,
        player: arreglo,
      });
  }, [dispatch]);

  return (
    <div>
      <Link to="/disponibles">
        <button className={styles.btn}>Volver</button>
      </Link>
      <h1 className={styles.title}>Equipo :</h1>
      <h1 className={styles.title}>
        {equipos[0] ? equipos[0].name : "ERROR no hay equipo seleccionado"}
      </h1>

      <ul className={styles.grid}>
        {jugadores.map((p: any) => {
          return (
            <li key={p.id}>
              <div>
                <p className={styles.titulo}>{p.name}</p>
                <img src={p.image} alt="Jugador" />
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.btnC}>
        {equipos[0] ? (
          <Link to="/home">
            <button className={styles.btn} type="submit" onClick={handleSubmit}>
              Enviar
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
