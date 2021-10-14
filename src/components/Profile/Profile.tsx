import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import axios from "axios";
import { resetUser } from "../../redux/actions";
import img from "../../visuales/profile.png";
import EditProfile from "./EditProfile";

export default function Profile() {
  const profile = window.sessionStorage.getItem("id");

  // console.log("Id", profile);

  const [user, setUser]: any = useState([]);
  const [btn, setBtn] = useState(false);
  console.log(user);

  useEffect(() => {
    player();
  }, []);

  const player = async () => {
    const data = await axios.get("http://localhost:3001/user?id=" + profile);
    var res = await data.data;
    setUser(res);
    // console.log("axios profile", res);
  };
  //console.log("estado", user);
  return (
    <div>
      <div className={styles.conteiner}>
        <h1>Bienvenido {user.name}</h1>
      </div>
      <div>
        <div className={styles.card}>
          <img className={styles.img} src={user.image || img} />
          <h3>Usuario</h3>
          <h4> {user.userName || "fede"}</h4>
          <h3>Telefono </h3>
          <h4>{user.cellphone || "1130102047"}</h4>
          <h3>Dni</h3>
          <h4>{user.dni || "38351158"}</h4>
          <h3>Posicion</h3>
          <h4>{user.player?.position || "MEDIOCAMPO"}</h4>
        </div>
        <EditProfile />
      </div>
    </div>
  );
}
