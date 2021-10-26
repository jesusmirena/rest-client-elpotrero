import React, { useState } from "react";
import { useHistory } from "react-router";
import useUser from "../../../../hooks/useUser";
import styles from "./LoginGoogleForm.module.scss";

function LoginGoogleForm() {
  let cookie = decodeURIComponent(document.cookie);
  const cookieParseada = cookie.split("{");
  const cookieObject = "{" + cookieParseada[1];
  const cookieJson = JSON.parse(cookieObject);
  const history = useHistory();

  const { PutLoginGoogle, PostLoginGoogle } = useUser();

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
  function handleSubmitRegisterGoogle(e: any) {
    e.preventDefault();
    PutLoginGoogle(UsuarioGoogle);
    alert("Bienvenido");
    history.push("/home");
  }
  function handleSubmitLoginGoogle(e: any) {
    e.preventDefault();
    PostLoginGoogle(cookieJson);
    history.push("/home");
  }

  return (
    <>
      <div className={styles.formBgImg}>
        {cookieJson.userName !== "Por default" ? (
          <div className={styles.container}>
            <h2 className={styles.titulo}>Bienvenido al Potrero</h2>
            <div className={styles.botonContainer}>
              <button
                className={styles.boton}
                onClick={(e) => handleSubmitLoginGoogle(e)}
              >
                Comenzá
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2>Ingresá los datos restantes</h2>

            <form
              className={styles.form}
              onSubmit={(e) => handleSubmitRegisterGoogle(e)}
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
                <select
                  onChange={handleChange}
                  name="player"
                  className="selectForm"
                >
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
                <select
                  onChange={handleChange}
                  name="gender"
                  className="selectForm"
                >
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
          </>
        )}
      </div>
    </>
  );
}

export default LoginGoogleForm;
