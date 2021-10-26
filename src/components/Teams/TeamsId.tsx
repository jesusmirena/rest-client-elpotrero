import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsId } from "../../redux/actions";
import styles from "./TeamsId.module.scss";
import TeamId from "./TeamId";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state: any) => state.teams.teamsId);
  let userId: any = window.sessionStorage.getItem("id");

  useEffect(() => {
    dispatch(getTeamsId(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1>Mis equipos</h1>
        </div>
        <div className={styles.grid}>
          {allTeams &&
            allTeams.map((el: any) => {
              return (
                <>
                  <TeamId
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    image={el.image}
                    qualification={el.qualification}
                    players={el.players}
                    votes={el.votes}
                    available={el.available}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
