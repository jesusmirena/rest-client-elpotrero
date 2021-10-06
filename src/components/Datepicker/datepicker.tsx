import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

export default function Datapicker() {
  const [date, setDate] = useState(null);

  console.log("formato fecha", date);
  return (
    <DatePicker
      dateFormat="dd-MM-yyyy"
      locale="es"
      selected={date}
      onChange={(date: any) => setDate(date)}
      minDate={new Date()}
      maxDate={addDays(new Date(), 7)}
      placeholderText="Select a date between today and 5 days in the future"
    />
  );
}
