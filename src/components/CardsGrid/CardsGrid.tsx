import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";
import { canchasm } from "../../lib/canchas";
import { getCanchas } from "../../redux/actions";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";

export default function CardsGrid() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCanchas());
  }, []);
  const canchas = useSelector((state: RootState) => state.canchas);

  console.log("arreglo", canchas);

  return (
    <div className={styles.containerGrid}>
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
