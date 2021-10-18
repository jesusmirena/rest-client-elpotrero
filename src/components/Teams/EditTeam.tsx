import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import img from "../../visuales/profile.png";
import { putEditTeam } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function EditTeam({
  image,
  name,
  available,
  id,
}: any) {
  const [team, setTeam] = useState({
    name: name,
    image: image,
    available: available,
  });
  const history = useHistory();
  const userusuario = {
    user: {
      name: team.name,
      available: team.available,
      image: team.image,
    },
  };

  const dispatch = useDispatch();

  function handleChange(e: any) {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(putEditTeam(id, userusuario.user));
    alert("CAMBIOS REALIZADO");
  }

  return (
    <div>
      {/* <div className={styles.conteiner}>
        <h1>Editar Perfil</h1>
      </div> */}
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <label className={styles.label}>URL imagen</label>
          <input
            className={styles.formInput}
            type="text"
            name="image"
            onChange={handleChange}
          />
          <label className={styles.label}>Nombre</label>
          <input
            className={styles.formInput}
            name="name"
            onChange={handleChange}
            defaultValue={name}
          />
          
          <button onClick={handleSubmit} className={styles.btn}>
            Enviar
          </button>
        </form>
        <div className={styles.imageContainer}>
          <div className={styles.c}>
            <img src={team.image} className={styles.img} />
            <label className={styles.label}>Nombre</label>
            <p className={styles.txt}>{team.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}