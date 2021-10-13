import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { postReserva } from "../../../redux/actions";
import styles from "./FormAlquiler.module.scss";
import useUser from "../../../hooks/useUser";
import { Redirect } from "react-router";

export default function FormAlquiler({
  id,
  endTime,
  inicialTime,
  timetable,
  name,
  cost,
}: FormAlquiler) {
  let hours = [];
  inicialTime = inicialTime.slice(0, 2);
  endTime = endTime.slice(0, 2);

  const history = useHistory();

  while (inicialTime < endTime) {
    hours.push(inicialTime + ":00");
    inicialTime++;
  }
  const dispatch = useDispatch();

  let { startDate }: any= useParams();
  //<{ startDate : string }>

  const userId = useSelector((state: any) => state.usuario.user.id);

  const [alquiler, setAlquiler] = useState({
    day: startDate,
    hour: "",
    duration: 1,
    user: userId,
    field: id,
  });

  
  const p = timetable.map((a: any) => a.hour);

  hours = hours.filter((i) => !p.includes(i));

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!userId) {
      alert("Debe iniciar sesion!");
      history.push("/login");
    } else {
      dispatch(postReserva(alquiler));

      setAlquiler({
        ...alquiler,
        hour: "",
      });
      history.push("/reserva");
      console.log("POST", alquiler);
    }
  }

  function handleSelect(e: any) {
    setAlquiler({
      ...alquiler,
      hour: e.target.value,
    });
  }
  const { isLogged } = useUser();

  return (
    <div>
      <form>
        <div className={styles.jordi}>
          <label className={styles.hora}>Hora disponible</label>
          <select className={styles.selectHora} onChange={handleSelect}>
            <option className={styles.select}>Horarios</option>
            {hours.map((g) => (
              <option className={styles.select} key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit} type="submit">
            Reserva
          </button>
        </div>
      </form>
    </div>
  );
}
