import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";
import { canchasm } from "../../lib/canchas";
import { getCanchas } from "../../redux/actions";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CardsGrid() {
  const { canchas } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("efecto", canchas);
    dispatch(getCanchas());
  }, []);

  return (
    <div className={styles.containerGrid}>
      <div className={styles.grid}>
        {canchasm.map((c: Cancha, i) => {
          return <Card key={i} data={c} />;
        })}
      </div>
    </div>
  );
}
