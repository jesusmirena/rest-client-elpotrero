import React, { useState } from "react";
import CardsGrid from "../CardsGrid/CardsGrid";
import styles from "./Home.module.scss";
//import { getCanchas } from "../../redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";
import Datepicker from "../Card/Datepicker/Datepicker";
import Card from "../Card/Card";

export default function Home() {
  return (
    <div className={styles.image}>
      <div className={styles.fondo}>
        <div>
          {/*     <Datepicker /> */}
          <CardsGrid />
        </div>
      </div>
    </div>
  );
}
