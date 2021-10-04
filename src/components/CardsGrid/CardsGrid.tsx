import React from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";
import { canchas } from "../../lib/canchas";

export default function CardsGrid() {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.grid}>
        {canchas.map((c: Cancha, i) => {
          return <Card key={i} data={c} />;
        })}
      </div>
    </div>
  );
}
