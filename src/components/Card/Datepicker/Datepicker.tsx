import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";//ROMPE
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useDispatch } from "react-redux";
import { getCanchasDisponible } from "../../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./Datepicker.module.scss";

registerLocale("es", es);

export default function Datepicker() {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(getCanchasDisponible(startDate));
  }, [startDate]);

  return (
    <div className={styles.container}>
      <p className={styles.fecha}>Selecciona una fecha</p>
      <div>
        <DatePicker
          className={styles.date}
          dateFormat="dd-MM-yyyy"
          locale="es"
          onChange={(date: any) => setStartDate(date)}
          selected={startDate}
          minDate={new Date()}
          maxDate={addDays(new Date(), 7)}
          placeholderText="Select a date between today and 5 days in the future"
        />
      </div>
      <div className={styles.btn}>
        <Link to={"/home/" + startDate}>
          <button>Ver canchas</button>
        </Link>
      </div>
    </div>
  );
}
