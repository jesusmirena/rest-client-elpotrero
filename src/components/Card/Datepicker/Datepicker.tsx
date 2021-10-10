import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useDispatch } from "react-redux";
import { getCanchasDisponible } from "../../../redux/actions";
import { Link } from "react-router-dom";

registerLocale("es", es);

export default function Datepicker() {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());




  useEffect(() => {


    dispatch(getCanchasDisponible(startDate));

  }, [startDate]);



  return (
    <div>
      <DatePicker
        dateFormat="dd-MM-yyyy"
        locale="es"
        onChange={(date: any) => setStartDate(date)}
        selected={startDate}
        minDate={new Date()}
        maxDate={addDays(new Date(), 16)}
        placeholderText="Select a date between today and 5 days in the future"
      />
      <div>
        <Link to={"/alquiler/" + startDate.toDateString()} >

          <button>alqui</button>
        </Link>
      </div>
    </div >
  );
}
