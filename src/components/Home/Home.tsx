import React from "react";
import CardsGrid from "../CardsGrid/CardsGrid";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.image}>
      <div className={styles.fondo}>
        <CardsGrid />
      </div>
    </div>
  );
}
