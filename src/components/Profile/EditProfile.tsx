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
    alert("CAMBIOS REALIZADO");
  }

  return (
    <div>
      <div>
        <form>
          <div className={styles.conteiner}>
            <h1>Editar Perfil</h1>
          </div>
          <div>
            <div className={styles.card}>
              <img className={styles.img} src={user.image || img} />
              <label>URL imagen</label>
              <input type="text" name="image" onChange={handleChange} />
              <h3>Nombre</h3>
              <input
                className={styles.formInput}
                name="name"
                onChange={handleChange}
                defaultValue={name}
              />
              <h3>Usuario</h3>
              <input
                className={styles.formInput}
                name="userName"
                onChange={handleChange}
                defaultValue={userName}
              />
              <h3>Telefono </h3>
              <input
                className={styles.formInput}
                type="number"
                name="cellphone"
                onChange={handleChange}
                defaultValue={cellphone}
              />

              <h3>Posicion</h3>
              <select onChange={handlePos}>
                <option selected={true} disabled value="Default">
                  Escoge una posicion
                </option>
                <option value="GOALKEEPER">Portero</option>
                <option value="DEFENDER">Defensa</option>
                <option value="MIDFIELDER">Centrocampista</option>
                <option value="ATTACKER">Delantero</option>
              </select>
              <h3>Genero</h3>
              <select onChange={handleGen}>
                <option selected={true} disabled value="Default">
                  Escoge un genero
                </option>
                <option value="FEMALE">femenino</option>
                <option value="MALE">masculino</option>
                <option value="UNDEFINED">otro</option>
              </select>
            </div>
            <button onClick={handleSubmit} className={styles.btn}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
