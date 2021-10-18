import React, { useState } from "react";
import styles from "./CrearEquipo.module.scss";
import { postTeam } from "../../redux/actions";
import { useDispatch } from "react-redux";
import imagen from "../../visuales/canchitaCard.png";

export default function CrearEquipo() {
  var id = window.sessionStorage.getItem("id");
  const dispatch = useDispatch();

  const [team, setTeam] = useState({
    name: "",
    image: "",
    available: true,
    id: id,
  });

  /* {“name":"River vol 2",  "image":"url", "available":true, "player":[ {"id":3},{"id":4}]}
   */

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(postTeam(team));
    alert("Equipo creado");

    setTeam({
      name: "",
      image: "",
      available: true,
      id: id,
    });
  }
  console.log();
  
  function handleChange(e: any) {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  }

  console.log("TEEMCREAR",team);

  return (
    <div className={styles.background}>
      <h2 style={{ color: "black" }}>Arma tu equipo</h2>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formDiv}>
            <input
              placeholder="Nombre del equipo"
              className={styles.formInput}
              onChange={handleChange}
              name="name"
              type="text"
            />
            {/*             <p className={styles.formLabel}>Nombre del equipo </p>
             */}{" "}
          </div>
          <div className={styles.formDiv}>
            <input
              placeholder="URL imagen del equipo"
              className={styles.formInput}
              onChange={handleChange}
              name="image"
              type="text"
            />
            {/* <p className={styles.formLabel}>Imagen del equipo </p> */}
          </div>
          <div className={styles.btncontainer}>
            <button type="submit" className={styles.btn}>
              Crear equipo
            </button>
          </div>
        </form>

        <div className={styles.imageContainer}>
          <img className={styles.img} src={team.image || imagen} />
          <h1 className={styles.title}>{team.name}</h1>
        </div>
      </div>
    </div>
  );
}
