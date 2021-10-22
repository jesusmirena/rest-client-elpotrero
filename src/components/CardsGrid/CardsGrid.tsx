import React from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

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
      {canchas.length ? (
        <>
          <h2 className={styles.titulo}>
            Canchas disponibles en la fecha :{fecha}
          </h2>

          <div className={styles.grid}>
            {canchas.map((c: Cancha, i: any) => {
              return <Card key={i} data={c} />;
            })}
          </div>
        </>
      ) : (
        <div>
          <h2 style={{ color: "black" }}>Volver a Home</h2>

          <Link style={{ color: "black" }} to="/home">
            Volver
          </Link>
        </div>
      )}
    </div>
  );
}
