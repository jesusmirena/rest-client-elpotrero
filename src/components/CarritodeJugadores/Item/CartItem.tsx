import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCarrito, getTeams, putTeam } from "../../../redux/actions";
import styles from "./CartItem.module.scss";
export default function CartItem() {
  const jugadores = useSelector((state: any) => state.carrito.carrito);
  const equipos = useSelector((state: any) => state.teams.teams);
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    name: equipos[0].name,
    image: equipos[0].image,
    available: true,
    player: [],
  });

  function deletePlayer(e: any) {
    dispatch(filterCarrito(e));
    alert("Jugador eliminado");
  }

  let arreglo: any = [];

  jugadores.forEach((e: any) => {
    arreglo.push({ id: e.id });
  });

  function handleSubmit(e: any) {
    dispatch(putTeam(equipos[0].id, state));
    alert("Enviado");
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
      <h1 className={styles.title}>Equipo: {equipos[0].name}</h1>
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
        <button className={styles.btn} type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
}
