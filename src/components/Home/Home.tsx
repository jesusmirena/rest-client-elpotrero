import React, { useEffect } from "react";
import CardsGrid from "../CardsGrid/CardsGrid";
import styles from "./Home.module.scss";
import { getCanchas } from "../../redux/actions";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Home() {
  return (
    <div className={styles.image}>
      <div className={styles.fondo}>
        <CardsGrid />
      </div>
    </div>
  );
}
