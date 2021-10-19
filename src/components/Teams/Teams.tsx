import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTeams, getTeamsId } from "../../redux/actions";
import styles from "./Teams.module.scss";
import Team from "./Team";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state: any) => state.teams.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1>Equipos disponibles</h1>
        </div>
        <div className={styles.grid}>
          {allTeams?.map((el: any) => {
            return (
              <Team
                name={el.name}
                image={el.image}
                qualification={el.qualification}
                players={el.players}
                user={el.user.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
