import React, { useState } from "react";
import { useParams } from "react-router";

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
  

  while (inicialTime < endTime) {
    hours.push(inicialTime + ":00");
    inicialTime++;
  }

  let { startDate }: any = useParams();
  //<{ startDate : string }>

  const [alquiler, setAlquiler] = useState({
    day: startDate,
    hour: "",
    duration: 1,
    field: id,
  });

  const p = timetable.map((a: any) => a.hour);

  hours = hours.filter((i) => !p.includes(i));

  function handleSubmit(e: any) {
    e.preventDefault();
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
            <input type="hidden" name="price" id="price" value={cost} />
            <input type="hidden" name="quantity" id="quantity" value="1" />
            <input type="submit" value="Reservar" />
          </form>
          {/* <button type="submit">Reserva</button> */}
        </div>
      </form>
    </div>
  );
}
