import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  filterCarrito,
  filterTeam,
  getTeamsDetailId,
  resetTeam,
  selectHour,
} from "../../../redux/actions";
import { GiSoccerField } from "react-icons/gi";
import styles from "./Carrito.module.scss";
import DatepickerDisponible from "../../Card/Datepicker/DatepickerNotification";

let hours: any = [];
let inicialTime = 10;
let endTime = 23;
while (inicialTime < endTime) {
  hours.push(inicialTime + ":00");
  inicialTime++;
}

export default function CarritoDisponible() {
  const dispatch = useDispatch();
  const history = useHistory();

  const equipodisponible = useSelector(
    (state: any) => state.carrito.carritoDisponible
  );
  const equipos = useSelector((state: any) => state.teams.teamsId);
  const detail = useSelector((state: any) => state.teams.teamDetail);
  const hour = useSelector((state: any) => state.carrito.horario);

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
      return alert("Elige un equipo");
    }
    if (!equipodisponible.length) {
      return alert("Elige un jugador");
    }
    if (!hour.length) {
      return alert("Elige un horario");
    } else {
      history.push("/carritoAvailable");
    }
  }

  function handleSelectHour(e: any) {
    dispatch(selectHour(e.target.value));
  }

  return (
    <div className={styles.padre}>
      <h1 className={styles.title}>Tu equipo</h1>
      <div>
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
        <div>
          <DatepickerDisponible />
        </div>
        <div>
          <select onChange={handleSelectHour} className={styles.selectHora}>
            <option className={styles.select}>Elige un horario</option>
            {hours.map((g: any) => (
              <option className={styles.select} key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.container}>
        <div>
          <GiSoccerField
            className={styles.cancha}
            onClick={handleEnviar}
            size={70}
          />
        </div>
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
