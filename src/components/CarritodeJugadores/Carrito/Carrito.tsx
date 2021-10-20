import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  filterCarrito,
  filterTeam,
  getTeamsDetailId,
  resetTeam,
} from "../../../redux/actions";
import { GiSoccerField } from "react-icons/gi";
import styles from "./Carrito.module.scss";

export default function Carrito() {
  const dispatch = useDispatch();
  const history = useHistory();

  const equipo = useSelector((state: any) => state.carrito.carrito);
  const equipodisponible = useSelector(
    (state: any) => state.carrito.carritoDisponible
  );
  const equipos = useSelector((state: any) => state.teams.teamsId);
  const detail = useSelector((state: any) => state.teams.teamDetail);

  function deletePlayer(e: any) {
    dispatch(filterCarrito(e));
    alert("Jugador eliminado");
  }

  function handleId(e: any) {
    if (e.target.value === "todos") {
      dispatch(resetTeam());
      dispatch(filterTeam(e.target.value));
    } else {
      dispatch(filterTeam(e.target.value));
      dispatch(getTeamsDetailId(e.target.value));
    }
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
          <option key={e.id} value={e.id}>
            {e.name}
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
          {detail.player && (
            <h4>
              Jugadores en tu equipo: {detail.player && detail.player.length}
            </h4>
          )}
        </div>

        <div className={styles.containerNombre}>
          {equipodisponible.map((e: any) => {
            return (
              <div
                key={e.id}
                className={styles.containerBtn}
                style={{ color: "white" }}
              >
                <input
                  key={e.id}
                  className={styles.btn}
                  type="button"
                  onClick={() => deletePlayer(e.id)}
                  value="X"
                />
                {e.name}
              </div>
            );
          })}
          {equipo.map((e: any) => {
            return (
              <div
                key={e.id}
                className={styles.containerBtn}
                style={{ color: "white" }}
              >
                <input
                  key={e.id}
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
