import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styles from "./LoginGoogleForm.module.scss";
function LoginGoogleForm() {
  const history = useHistory();

  const password = useRef({});

  let cookie = decodeURIComponent(document.cookie);
  const cookieParseada = cookie.split("{");
  const cookieObject = "{" + cookieParseada[1];
  const cookieJson = JSON.parse(cookieObject);
  console.log("COOKIEEEE", cookieJson);

  // const onSubmit: SubmitHandler<User> = (data) => {
  //   alert("Usuario Creado"),
  //     reset(),
  //     console.log("logingoogle", data),
  //     history.push("/login");
  // };

  const [UsuarioGoogle, setUsuarioGoogle] = useState({
    name: cookieJson.name,
    mail: "",
    image: "",
    birthday: "",
    userName: "",
    gender: "",
    cellphone: "",
    dni: "",
    player: {
      position: "",
    },
  });
  console.log("USUARIOOOO", UsuarioGoogle);

  function handleChange(e: any) {
    setUsuarioGoogle({
      ...UsuarioGoogle,
      [e.target.name]: e.target.value,
    });
  }
  function handleLoginGoogle() {}

  return (
    <div className={styles.formBgImg}>
      <h2>Ingresa los datos restantes</h2>
      <form className={styles.form} onSubmit={handleLoginGoogle}>
        <div className={styles.formDiv}>
          <input
            onChange={handleChange}
            autoComplete="off"
            className={styles.formInput}
            placeholder="Escribe tu nombre"
          />
          <label className={styles.formLabel}>Nombre</label>
        </div>
        <div className={styles.formDiv}>
          <input
            autoComplete="off"
            className={styles.formInput}
            placeholder="Escribe tu nombre de usuario"
          />
          <label className={styles.formLabel}>Nombre de usuario</label>
        </div>
        <div className={styles.formDiv}>
          <input className={styles.formInput} type="date" />
          <label className={styles.formLabel}>Fecha de nacimiento</label>
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            type="number"
            placeholder="Ingresa tu documento de identificacion"
          />
          <label className={styles.formLabel}>
            Documento de identificacion
          </label>
        </div>
        <div className={styles.formDiv}>
          <input
            className={styles.formInput}
            placeholder="Ingresa tu numero telefonico"
            type="tel"
          />
          <label className={styles.formLabel}>Numero de telefono</label>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Posicion</label>
          <select className="selectForm">
            <option selected={true} disabled value="Default">
              Escoge una posicion
            </option>
            <option value="GOALKEEPER">Portero</option>
            <option value="DEFENDER">Defensa</option>
            <option value="MIDFIELDER">Centrocampista</option>
            <option value="ATTACKER">Delantero</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Genero</label>
          <select className="selectForm">
            <option selected={true} disabled value="Default">
              Escoge un genero
            </option>
            <option value="FEMALE">femenino</option>
            <option value="MALE">masculino</option>
            <option value="UNDEFINED">otro</option>
          </select>
        </div>
        <div className={styles.btncontainer}>
          <input className={styles.button} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default LoginGoogleForm;
