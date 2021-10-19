import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import img from "../../visuales/profile.png";
import { putUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function EditProfile({
  userName,
  cellphone,
  position,
  dni,
  gender,
  birthday,
  image,
  password,
  qualification,
  name,
  mail,
  votes,
  id,
}: any) {
  const [user, setUser] = useState({
    name: name,
    userName: userName,
    gender: gender,
    dni: dni,
    birthday: birthday,
    cellphone: cellphone,
    mail: mail,
    image: image,
    password: password,
    player: {
      position: position,
      qualification: qualification,
      votes: votes,
    },
  });
  const history = useHistory();
  const userusuario = {
    user: {
      name: user.name,
      userName: user.userName,
      gender: user.gender,
      dni: user.dni,
      birthday: user.birthday,
      image: user.image,
      cellphone: parseInt(user.cellphone),
      mail: user.mail,
      player: {
        position: user.player.position,
        qualification: user.player.qualification,
        votes: user.player.votes,
      },
    },
  };

  const dispatch = useDispatch();

  function handleChange(e: any) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  function handlePos(e: any) {
    setUser({
      ...user,
      player: { ...user.player, position: e.target.value },
    });
  }

  function handleGen(e: any) {
    setUser({
      ...user,
      gender: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(putUser(id, userusuario.user));
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
          <label className={styles.label}>Usuario</label>
          <input
            className={styles.formInput}
            name="userName"
            onChange={handleChange}
            defaultValue={userName}
          />
          <label className={styles.label}>Telefono </label>
          <input
            className={styles.formInput}
            type="number"
            name="cellphone"
            onChange={handleChange}
            defaultValue={cellphone}
          />

          <label className={styles.label}>Posicion</label>
          <select onChange={handlePos}>
            <option selected={true} disabled value="Default">
              Escoge una posicion
            </option>
            <option value="GOALKEEPER">Portero</option>
            <option value="DEFENDER">Defensa</option>
            <option value="MIDFIELDER">Centrocampista</option>
            <option value="ATTACKER">Delantero</option>
          </select>
          <label className={styles.label}>Genero</label>
          <select onChange={handleGen}>
            <option selected={true} disabled value="Default">
              Escoge un genero
            </option>
            <option value="FEMALE">Femenino</option>
            <option value="MALE">Masculino</option>
            <option value="UNDEFINED">Otro</option>
          </select>

          <button onClick={handleSubmit} className={styles.btn}>
            Enviar
          </button>
        </form>
        <div className={styles.imageContainer}>
          <div className={styles.c}>
            <img src={user.image} className={styles.img} />
            <label className={styles.label}>Nombre</label>
            <p className={styles.txt}>{user.name}</p>
            <label className={styles.label}>Usuario</label>
            <p className={styles.txt}>{user.userName}</p>
            <label className={styles.label}>Telefono</label>
            <p className={styles.txt}>{user.cellphone}</p>
            <label className={styles.label}>Posicion</label>
            <p className={styles.txt}>{user.player.position}</p>
            <label className={styles.label}>Genero</label>
            <p className={styles.txt}>{user.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
