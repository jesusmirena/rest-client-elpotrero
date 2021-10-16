import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import axios from "axios";
import { deleteUser, getUser, resetUser } from "../../redux/actions";
import img from "../../visuales/profile.png";
import EditProfile from "./EditProfile";
import useUser from "../../hooks/useUser";
import { useHistory } from "react-router";

export default function Profile() {
  const profile = window.sessionStorage.getItem("id");
  const dispatch = useDispatch();
  const history = useHistory();

  const { logout } = useUser();

  // console.log("Id", profile);

  const [user, setUser]: any = useState([]);
  const [btn, setBtn] = useState(true);
  const [btndelete, setBtndelete] = useState(false);

  const player = async () => {
    const data = await axios.get("http://localhost:3001/user?id=" + profile);
    var res = await data.data;
    setUser(res);
    // console.log("axios profile", res);
  };

  /*   useEffect(() => {
    axios.get("http://localhost:3001/user?id=" + profile).then((res) => {
      setUser(res.data);
    });
  }, [profile]); */

  function handleBtn(e: any) {
    e.preventDefault();
    setBtn(!btn);
  }

  function handleDelete(e: any) {
    e.preventDefault();
    setBtndelete(!btndelete);
  }

  function handleConfirmar(e: any) {
    e.preventDefault();
    dispatch(deleteUser(user.id));
    alert("GRACIAS POR CONFIAR EN NOSOTROS");
    logout();
    history.push("/");
  }

  useEffect(() => {
    player();
  }, [btn]);
  return (
    <div>
      <button className={styles.btn} onClick={handleBtn}>
        {btn ? "EDITAR PERFIL" : "VOLVER"}
      </button>

      <button className={styles.btn} onClick={handleDelete}>
        {btndelete ? "CANCELAR" : "ELIMINAR PERFIL"}
      </button>
      {btndelete && (
        <button className={styles.btn} onClick={handleConfirmar}>
          CONFIRMAR
        </button>
      )}

      {btn ? (
        <div>
          <div className={styles.conteiner}>
            <h1>Bienvenido {user.name}</h1>
          </div>
          <div>
            <div className={styles.card}>
              <img className={styles.img} src={user.image || img} />
              <h3>Usuario</h3>
              <h4> {user.userName}</h4>
              <h3>Telefono </h3>
              <h4>{user.cellphone}</h4>
              <h3>Dni</h3>
              <h4>{user.dni}</h4>
              <h3>Posicion</h3>
              <h4>{user.player?.position}</h4>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <EditProfile
            cellphone={user.cellphone}
            dni={user.dni}
            gender={user.gender}
            id={user.id}
            image={user.image}
            birthday={user.birthday}
            mail={user.mail}
            name={user.name}
            password={user.password}
            userName={user.userName}
            position={user.player?.position}
            playerId={user.playerId}
            qualification={user.player.qualification}
            votes={user.player.votes}
            available={user.player.available}
          />
        </div>
      )}
    </div>
  );
}
