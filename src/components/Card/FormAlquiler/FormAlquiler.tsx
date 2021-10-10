import React from "react";

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

  const p = timetable.map((a: any) => a.hour);

  hours = hours.filter((i) => !p.includes(i));

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <label>Hora disponible</label>
        <select>
          {hours.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button>Reserva</button>
      </div>
    </div>
  );
}
