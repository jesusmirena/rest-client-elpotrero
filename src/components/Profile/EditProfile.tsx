import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import { putUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { playersPosition } from "../Teams/Funciones/PlayersPosition";
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
  const cloud_name = "dkkwjslk9";
  const upload_preset = "kzhe1mvq";

  const handleClick = (e: any) => {
    e.preventDefault();
    const { files }: any = document.querySelector(".app_uploadInput");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", upload_preset);
    const options = {
      method: "POST",
      body: formData,
    };
    return fetch(
      `https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setUser({
          ...user,
          image: res.secure_url,
        }); //url de la imagen
      })
      .catch((err) => console.log(err));
  };

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
          <label className={styles.label}>Imagen</label>
          {/*  <input
          
          className={styles.formInput}
          type="text"
          name="image"
        onChange={handleChange}/> */}
          <div className={styles.file}>
            <input
              style={{ borderRadius: "10px" }}
              type="file"
              className="app_uploadInput"
            />
          </div>
          <button className={styles.btnImg} onClick={handleClick}>
            Cargar imagen
          </button>
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
            <option value="GOALKEEPER">ARQUERO</option>
            <option value="DEFENDER">DEFENSOR</option>
            <option value="MIDFIELDER">MEDIOCAMPISTA</option>
            <option value="ATTACKER">ATACANTE</option>
          </select>
          <label className={styles.label}>Genero</label>
          <select onChange={handleGen}>
            <option selected={true} disabled value="Default">
              Escoge un genero
            </option>
            <option value="FEMALE">FEMENINO</option>
            <option value="MALE">MASCULINO</option>
            <option value="UNDEFINED">OTRO</option>
          </select>

          <button onClick={handleSubmit} className={styles.btn}>
            Enviar
          </button>
        </form>
        <div className={styles.imageContainer}>
          <div className={styles.c}>
            <img src={user.image} className={styles.img} alt={user.name} />
            <label className={styles.label}>Nombre</label>
            <p className={styles.txt}>{user.name}</p>
            <label className={styles.label}>Usuario</label>
            <p className={styles.txt}>{user.userName}</p>
            <label className={styles.label}>Telefono</label>
            <p className={styles.txt}>{user.cellphone}</p>
            <label className={styles.label}>Posicion</label>
            <p className={styles.txt}>
              {playersPosition(user.player.position)}
            </p>
            <label className={styles.label}>Genero</label>
            <p className={styles.txt}>{user.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
