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
    
  }, []);

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(getTeams());
  }

  return (
    <div >
      <h2 >Equipos disponibles</h2>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Cargar todos los Equipos
      </button>
      {
        allTeams && allTeams.map((el:any) =>{
          return <Team name={el.name} image={el.image} qualification={el.qualification} players={el.players}/>
        })
      } 
      
    </div>
  );
}
