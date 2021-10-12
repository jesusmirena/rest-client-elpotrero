import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";
import { getCanchasDisponible } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FormAlquiler from "../Card/FormAlquiler/FormAlquiler";
import { useParams } from "react-router";

export default function CardsGrid(props: any) {
  try {
    var data = props.match.params.startDate;
  } catch (err) {
    console.log(err);
  }

  const canchas = useSelector((state: RootState) => state.canchas.canchas);

  return (
    <div className={styles.containerGrid}>
      <h3 className={styles.titulo}>
        Canchas disponibles en la fecha :{data?.slice(3, 15)}
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
