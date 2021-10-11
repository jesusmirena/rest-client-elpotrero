import * as React from "react";
import imagen from "../../visuales/canchitaCard.png";
import styles from "../Card/Card.module.scss";
import FormAlquiler from "./FormAlquiler/FormAlquiler";
import Reserva from "../Reserva/Reserva";

const Card = ({ data }: any) => {
  const {
    name,
    image,
    qualification,
    inicialTime,
    cost,
    description,
    endTime,
    id,
    adress,
    timetable,
  } = data;

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={image} alt="Img not found" />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Precio: {cost}</p>
        <p>Calificacion {qualification}</p>
      </div>

      <div className={styles.selectContainer}>
        <FormAlquiler
          id={id}
          inicialTime={inicialTime}
          endTime={endTime}
          timetable={timetable}
          name={name}
          cost={cost}
        />
      </div>
      <div>
        {/* <Reserva
          id={id}
          inicialTime={inicialTime}
          endTime={endTime}
          timetable={timetable}
          name={name}
          cost={cost}
          image={image}
          qualification={qualification}
          description={description}
          adress={adress}
        /> */}
      </div>
    </div>
  );
};

export default Card;
