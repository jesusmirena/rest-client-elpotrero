import * as React from "react";
import imagen from "../../visuales/canchitaCard.png";
import styles from "../Card/Card.module.scss";

interface Props {
  data: Cancha;
}

const Card = ({ data }: Props) => {
  const { id, number, image, inicialTime, cost, description, endTime } = data;

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={image} alt="Img not found" />
      </div>
      <div className={styles.info}>
        <h2>{number}</h2>
        <p>{description}</p>
        <p>Precio: {cost}</p>
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
        <button className={styles.button} type="submit">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default Card;
