import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTeams, getTeamsId } from "../../redux/actions";
import styles from "./Teams.module.scss";
import Team from "./Team";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state: any) => state.teams.teams);

  let userId: any = window.sessionStorage.getItem("id");
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1 style={{ color: "black" }}>Equipos disponibles</h1>
        </div>
        <div className={styles.grid}>
          {allTeams &&
            allTeams.map((el: any) => {
              return (
                <Team
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  qualification={el.qualification}
                  available={el.available}
                  players={el.players}
                  user={el.user}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
