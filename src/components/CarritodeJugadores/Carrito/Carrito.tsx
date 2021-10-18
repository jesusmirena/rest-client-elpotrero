import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { filterCarrito, filterTeam } from "../../../redux/actions";
import { GiSoccerField } from "react-icons/gi";
import styles from "./Carrito.module.scss";

export default function Carrito() {
  const dispatch = useDispatch();
  const history = useHistory();

  const equipo = useSelector((state: any) => state.carrito.carrito);
  const equipos = useSelector((state: any) => state.teams.teams);

  function deletePlayer(e: any) {
    dispatch(filterCarrito(e));
    alert("Jugador eliminado");
  }

  function handleId(e: any) {
    dispatch(filterTeam(e.target.value));
  }

  function handleEnviar() {
    if (equipos.length > 1) {
      return alert("elige un equipo");
    }
    if (!equipo.length) {
      return alert("elige un jugador");
    } else {
      history.push("/carrito");
    }
  }

  return (
    <div className={styles.padre}>
      <h1 className={styles.title}>Tu equipo</h1>

      <select
        onChange={(e) => {
          handleId(e);
        }}
      >
        <option selected disabled>
          Selecciona un equipo
        </option>
        {equipos.map((e: any) => (
          <option value={e.id}>
            {e.name} {e.id}
          </option>
        ))}
        <option value="todos">Todos los equipos</option>
      </select>
      <div className={styles.container}>
        <GiSoccerField
          className={styles.cancha}
          onClick={handleEnviar}
          size={70}
        />

        <div>
          <h3>{equipo.length === 0 ? null : equipo.length}</h3>
        </div>

        <div className={styles.containerNombre}>
          {equipo.map((e: any) => {
            return (
              <div className={styles.containerBtn} style={{ color: "white" }}>
                <input
                  className={styles.btn}
                  type="button"
                  onClick={() => deletePlayer(e.id)}
                  value="X"
                />
                {e.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
