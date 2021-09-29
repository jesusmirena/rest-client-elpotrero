import React from "react";
import Card from "../Card/Card";
import styles from "../CardsGrid/CardsGrid.module.scss";

export default function CardsGrid() {
  return (
    <div className={styles.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
