import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"; //ROMPE
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useDispatch } from "react-redux";
import styles from "./DatepickerNotification.module.scss";
import { selectDay } from "../../../redux/actions";

registerLocale("es", es);

export default function DatepickerDisponible() {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    dispatch(selectDay(startDate));
  }, [startDate]);

  return (
    <div className={styles.container}>
      <p className={styles.fecha}>Selecciona una fecha para invitar</p>
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
    </div>
  );
}
