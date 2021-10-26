import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "../../redux/actions";
import styles from "./Teams.module.scss";
import AllTeam from "./AllTeam";

export default function AllTeams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state: any) => state.teams.teamsAllTeams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.grid}>
          {allTeams &&
            allTeams.map((el: any) => {
              return (
                <AllTeam
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  available={el.available}
                  qualification={el.qualification}
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
