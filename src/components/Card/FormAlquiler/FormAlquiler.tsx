import React, { useState } from "react";
import { date } from "yup";
import Datepicker from "../Datepicker/Datepicker";

export default function FormAlquiler({ id, endTime, inicialTime }: any) {
  let hours = [];
  inicialTime = inicialTime.slice(0, 2);
  endTime = endTime.slice(0, 2);

  while (inicialTime < endTime) {
    hours.push(inicialTime + ":00");
    inicialTime++;
  }

  /*   const [input, setInput] = useState({
      date: new Date(),
      day: date,
      hour: "",
      duration: 1,
      fieldId: id,
    }); */
  /* 
    function handleSelect(e: any) {
      setInput({
        ...input,
        hour: e.target.value,
      });
    }
   */
  function handleSubmit(e: any) {
    e.preventDefault();
  }


  return (
    <div>
      <div>
        <select >
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

/* {"day": "2021/12/06",
  "hour": "10:00",
  "duration": 1,
  "fieldId": 1,
} */
