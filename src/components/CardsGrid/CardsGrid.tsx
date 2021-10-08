import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";
import { getCanchasDisponible } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CardsGrid({ dato }: any) {
  console.log("PUTO", dato)
  const dispatch = useDispatch();


  /*   useEffect(() => {
  
  
      dispatch(getCanchasDisponible(dato));
  
    }, [dispatch]);
 */

  /*  useEffect(() => {
     dispatch(
       getCanchasDisponible()
 
     );
   }, [dispatch]); */
  const canchas = useSelector((state: RootState) => state.canchas);

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
