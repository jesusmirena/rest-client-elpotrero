import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { postReserva } from "../../../redux/actions";

export default function FormAlquiler({
  id,
  endTime,
  inicialTime,
  timetable,
  name,
  cost,
}: any) {
  let hours = [];
  inicialTime = inicialTime.slice(0, 2);
  endTime = endTime.slice(0, 2);
  
  let costPorcentage = Math.floor(cost*20)/100;


  while (inicialTime < endTime) {
    hours.push(inicialTime + ":00");
    inicialTime++;
  }
  const dispatch = useDispatch();

  let { startDate }: any = useParams();
  //<{ startDate : string }>

  const [alquiler, setAlquiler] = useState({
    day: startDate,
    hour: "",
    duration: 1,
    user: 1,
    field: id,
  });

  const p = timetable.map((a: any) => a.hour);

  hours = hours.filter((i) => !p.includes(i));

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(postReserva(alquiler));

    setAlquiler({
      ...alquiler,
      hour: "",
    });

    console.log("POST", alquiler);
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
          <form action="http://localhost:3001/checkout" method="POST">
            <input type="hidden" name="title" id="title" value={name} />
            <input type="hidden" name="price" id="price" value={costPorcentage} />
            <input type="hidden" name="quantity" id="quantity" value="1" />
            <input type="submit" value="Reservar" />
          </form>
          {/* <button type="submit">Reserva</button> */}
        </div>
      </form>
    </div>
  );
}
