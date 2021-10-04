import React, { useEffect } from "react";
import CardsGrid from "../CardsGrid/CardsGrid";
import styles from "./Home.module.scss";
import { getCanchas } from "../../redux/actions";

export default function Home() {
  useEffect(() => {
    getCanchas();
  }, []);

  return (
    <div className={styles.image}>
      <div className={styles.fondo}>
        <CardsGrid />
      </div>
    </div>
  );
}
