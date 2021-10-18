import React, { useState } from "react";
import { useHistory } from "react-router";
import useUser from "../../../../hooks/useUser";
import styles from "./LoginGoogleForm.module.scss";

function LoginGoogleForm() {
  let cookie = decodeURIComponent(document.cookie);
  const cookieParseada = cookie.split("{");
  const cookieObject = "{" + cookieParseada[1];
  const cookieJson = JSON.parse(cookieObject);

  // if (cookieJson.userName !== "Por default") {

  // }
  const { isLoginLoading, hasLoginError, loginGoogle, isLogged } = useUser();

  const [UsuarioGoogle, setUsuarioGoogle] = useState({
    id: cookieJson.id,
    birthday: "",
    userName: "",
    gender: "",
    cellphone: "",
    dni: "",
    player: {
      position: "",
    },
  });

  function handleChange(e: any) {
    setUsuarioGoogle({
      ...UsuarioGoogle,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmitLoginGoogle(e: any) {
    console.log("handle GOOGLE", UsuarioGoogle);
    e.preventDefault();
    loginGoogle(UsuarioGoogle), alert("Bienvenido");
  }

  return (
    <div className={styles.formBgImg}>
      <h2>Ingresa los datos restantes</h2>
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmitLoginGoogle(e)}
      >
        <div className={styles.formDiv}>
          <input
            onChange={handleChange}
            name="userName"
            autoComplete="off"
            className={styles.formInput}
            placeholder="Escribe tu nombre de usuario"
          />
          <label className={styles.formLabel}>Nombre de usuario</label>
        </div>
        <div className={styles.formDiv}>
          <input
            onChange={handleChange}
            name="birthday"
            className={styles.formInput}
            type="date"
          />
          <label className={styles.formLabel}>Fecha de nacimiento</label>
        </div>
        <div className={styles.formDiv}>
          <input
            type="number"
            name="dni"
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Ingresa tu documento de identificacion"
          />
          <label className={styles.formLabel}>
            Documento de identificacion
          </label>
        </div>
        <div className={styles.formDiv}>
          <input
            onChange={handleChange}
            name="cellphone"
            className={styles.formInput}
            placeholder="Ingresa tu numero telefonico"
            type="tel"
          />
          <label className={styles.formLabel}>Numero de telefono</label>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Posicion</label>
          <select onChange={handleChange} name="player" className="selectForm">
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
          <select onChange={handleChange} name="gender" className="selectForm">
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
