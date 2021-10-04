import * as React from "react";
import image from "../../visuales/canchitaCard.png";
import styles from "../Card/Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={image} alt="Img not found" />
      </div>
      <div className={styles.info}>
        <h2>Serrano Corner</h2>
        <p>Serrano 250, Capital Federal</p>
      </div>

      <div className={styles.selectContainer}>
        <div>
          <select className={styles.select}>
            <option>Horario</option>
            <option>18:00hs</option>
            <option>19:00hs</option>
            <option>20:00hs</option>
            <option>21:00hs</option>
          </select>
        </div>
        <div>
          <select className={styles.select}>
            <option>Fecha</option>
            <option>Martes</option>
            <option>Miercoles</option>
            <option>Jueves</option>
            <option>Viernes</option>
          </select>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <input className={styles.button} type="submit" />
      </div>
    </div>
  );
}
