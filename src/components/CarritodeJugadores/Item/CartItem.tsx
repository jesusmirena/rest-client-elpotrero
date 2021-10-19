import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  filterCarrito,
  getPlayers,
  getTeamsId,
  putTeam,
} from "../../../redux/actions";
import styles from "./CartItem.module.scss";
export default function CartItem() {
  const jugadores = useSelector((state: any) => state.carrito.carrito);
  const equipos = useSelector((state: any) => state.teams.teamsId);
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setstate] = useState({
    name: equipos[0] ? equipos[0].name : "",
    image: equipos[0] ? equipos[0].image : "",
    available: true,
    player: [],
  });

  /*   function deletePlayer(e: any) {
    dispatch(filterCarrito(e));
    alert("Jugador eliminado");
  } */

  let arreglo: any = [];

  jugadores[0]
    ? jugadores.forEach((e: any) => {
        arreglo.push({ id: e.id });
      })
    : "";

  function handleSubmit(e: any) {
    dispatch(putTeam(equipos[0].id, state));
  }

  useEffect(() => {
    setstate({
      ...state,
      player: arreglo,
    });
  }, [dispatch]);

  return (
    <div>
      <Link to="/jugadores">
        <button className={styles.btn}>Volver</button>
      </Link>
      <h1 className={styles.title}>Equipo :</h1>
      <h1 className={styles.title}>
        {equipos[0] ? equipos[0].name : "ERROR no hay equipo seleccionado"}
      </h1>
      <ul className={styles.grid}>
        {jugadores.map((p: any) => {
          return (
            <li>
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
          <Link to="/jugadores">
            <button className={styles.btn} type="submit" onClick={handleSubmit}>
              Enviar
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
