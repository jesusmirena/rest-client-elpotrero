import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { postReserva } from "../../../redux/actions";
export default function FormAlquiler({
  id,
  endTime,
  inicialTime,
  timetable,
}: any) {
  let hours = [];
  inicialTime = inicialTime.slice(0, 2);
  endTime = endTime.slice(0, 2);

  while (inicialTime < endTime) {
    hours.push(inicialTime + ":00");
    inicialTime++;
  }
  const dispatch = useDispatch();

  let { startDate }: any = useParams();
  //<{ startDate : string }>

  const userId = useSelector((state: any) => state.usuario.user.id);

  const [alquiler, setAlquiler] = useState({
    day: startDate,
    hour: "",
    duration: 1,
    user: userId,
    field: id,
  });

  console.log("FORMULARIO", alquiler);
  const p = timetable.map((a: any) => a.hour);

  hours = hours.filter((i) => !p.includes(i));

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!userId) {
      alert("Debe registrarse!");
    } else {
      dispatch(postReserva(alquiler));

      setAlquiler({
        ...alquiler,
        hour: "",
      });

      console.log("POST", alquiler);
    }
  }

  function handleSelect(e: any) {
    setAlquiler({
      ...alquiler,
      hour: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Hora disponible</label>
          <select onChange={handleSelect}>
            <option>Horarios</option>
            {hours.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Reserva</button>
        </div>
      </form>
    </div>
  );
}
