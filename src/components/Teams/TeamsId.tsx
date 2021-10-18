import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTeams, getTeamsId } from "../../redux/actions";
import styles from "./Teams.module.scss";
import TeamId from "./TeamId";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state: any) => state.teams.teamsId);
  let userId: any = window.sessionStorage.getItem("id");
  //console.log("TEAMSS", allTeams);

  useEffect(() => {
    dispatch(getTeamsId(userId));
  }, []);

  return (
    <div>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1>Mis equipos</h1>
        </div>
        <div className={styles.grid}>
          {allTeams &&
            allTeams.map((el: any) => {
              return (
                <TeamId
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  qualification={el.qualification}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
