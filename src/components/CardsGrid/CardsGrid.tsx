import React from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CardsGrid(props: any) {
  try {
    var data = props.match.params.startDate;
  } catch (err) {
    console.log(err);
  }

  const canchas = useSelector((state: RootState) => state.canchas.canchas);
  function dateChange(prop: any) {
    let preday = prop.slice(0, 15).split(" ");
    let day = preday[2];
    let year = preday[3];
    let monthName = preday[1];
    let monthNumber = (new Date(monthName + "1").getMonth() + 1).toString();
    let dayMonthYear = day + "/" + monthNumber + "/" + year;

    return dayMonthYear;
  }

  const fecha = dateChange(data);

  return (
    <div className={styles.containerGrid}>
      <h3 className={styles.titulo}>
        Canchas disponibles en la fecha :{fecha}
      </h3>
      {
        <div className={styles.grid}>
          {canchas.map((c: Cancha, i) => {
            return <Card key={i} data={c} />;
          })}
        </div>
      }
    </div>
  );
}
