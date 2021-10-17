import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsId } from "../../redux/actions";
import styles from "./TeamId.module.scss";
import Team from "./Team";

export default function TeamId() {
  const dispatch = useDispatch();
  const allTeamsId = useSelector((state: any) => state.teams.teamsId);
  let userId: any = window.sessionStorage.getItem("id");
  console.log("TEAMSS", allTeamsId);

  useEffect(() => {
    dispatch(getTeamsId(userId));
  }, []);
 
   
    return (
      <div>
        <h2 className={styles.container}>Mis Equipos</h2>

        {allTeamsId &&
          allTeamsId.map((el: any) => {
            return (
              <Team
                name={el.name}
                image={el.image}
                qualification={el.qualification}
              />
            );
          })}
      </div>
    );
}
