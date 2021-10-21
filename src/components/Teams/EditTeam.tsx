import React, { useEffect, useState } from "react";
import styles from "./EditTeam.module.scss";
import img from "../../visuales/profile.png";
import { filterPlayerTeam, putEditTeam } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
export default function EditTeam() {
  const dispatch = useDispatch();
  const edit = useSelector((state: any) => state.teams.teamsId);

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
        setEquipo({
          ...equipo,
          image: res.secure_url,
        }); //url de la imagen
      })
      .catch((err) => console.log(err));
  };

  const [state, setState] = useState(edit[0] ? edit[0].players : "");
  const [equipo, setEquipo] = useState({
    name: edit[0] ? edit[0].name : "",
    image: edit[0] ? edit[0].image : "",
  });
  function deletePlayer(id: any) {
    setState(state.filter((e: any) => e.id !== id));
  }

  function handleChange(e: any) {
    setEquipo({
      ...equipo,
      [e.target.name]: e.target.value,
    });
  }

  var arreglo: any = [];
  function handlePut() {
    state.forEach((e: any) => {
      arreglo.push({ id: e.id });
    });

    dispatch(
      putEditTeam(edit[0].id, {
        name: equipo.name,
        image: equipo.image,
        player: arreglo,
        available: edit[0].available,
      })
    );
  }
  return (
    <div className={styles.containerGlobal}>
      {edit.length ? (
        <>
          <div className={styles.conteiner}>
            <h1>Editar Equipo</h1>
          </div>
          <div>
            <Link to="/teamsId">
              <button className={styles.btn}>Volver</button>
            </Link>
          </div>
          <div className={styles.container}>
            <form className={styles.formContainer}>
              <label className={styles.label}>URL imagen</label>
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
                defaultValue={edit[0].name}
                onChange={handleChange}
                className={styles.formInput}
                name="name"
              />
            </form>
            <div className={styles.imageContainer}>
              <div className={styles.c}>
                <img src={equipo.image} className={styles.img} />
                <label className={styles.label}>Nombre</label>
                <p className={styles.txt}>{equipo.name}</p>

                {state?.map((e: any) => {
                  return (
                    <div>
                      <input
                        key={e.id}
                        className={styles.btnPlayer}
                        type="button"
                        onClick={() => deletePlayer(e.id)}
                        value="X"
                      />
                      <p style={{ color: "white" }}>{e.name}</p>
                    </div>
                  );
                })}
              </div>
              <button onClick={handlePut}>ENVIAR CAMBIOS</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>ERROR</h1>
          <Link to="/teamsId">
            <button>VOLVER</button>
          </Link>
        </>
      )}
    </div>
  );
}
