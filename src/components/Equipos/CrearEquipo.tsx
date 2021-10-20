import React, { useState } from "react";
import styles from "./CrearEquipo.module.scss";
import { postTeam } from "../../redux/actions";
import { useDispatch } from "react-redux";
import imagen from "../../visuales/canchitaCard.png";
import { useHistory } from "react-router";

export default function CrearEquipo() {
  var id = window.sessionStorage.getItem("id");
  const dispatch = useDispatch();
  const history = useHistory();

  const [team, setTeam] = useState({
    name: "",
    image:
      "https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/246721314_10223753867867303_1359235114715575403_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHiQRam5DB0a4N0N8b9MxaMrRFOMM8mUEqtEU4wzyZQSlsE1tnFjR6RRpKaHn3eLQ4&_nc_ohc=IMzc8wsL-vMAX9KUPjp&_nc_ht=scontent.feze11-1.fna&oh=c0722c386816ce28a8825a0f38b151c5&oe=6195E926",
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
    history.push("/jugadores");
  }
  console.log();

  function handleChange(e: any) {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  }

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
