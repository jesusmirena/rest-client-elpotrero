import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTeams} from "../../redux/actions"


export default function Teams() {
  const dispatch = useDispatch();
  const team = useSelector((state: any) => state.teams)
  const id = window.sessionStorage.getItem("id");
  console.log(team);
  
  
  
  useEffect(() => {
    dispatch(getTeams(id));
  }, []);
  
  return (
    <div>
      <h1>{team.name}</h1>
      <div>
        <h3>nombre</h3>
        <h3>imagen</h3>
        <h3>calificacion</h3>
        <h3>available</h3>
        <h3>players</h3>
      </div>
    </div>
  );
}
