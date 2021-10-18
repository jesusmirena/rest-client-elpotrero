import React ,{ useEffect, useState } from "react"
import { getNotificaciones, putNotification } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Notificaciones(){
const notificaciones = useSelector((state:any) => state.notificaciones.notificaciones)
const dispatch = useDispatch();
const history = useHistory();
let userId: any = window.sessionStorage.getItem("id");

useEffect(() => {
  dispatch(getNotificaciones(userId)); // VER COMO TRAERME EL ID DEL USUARIO QUE INICIO SESION
}, []);


    function handleAccept(id:number){
        let payload = {
            id:id,
            attending:"YES"
        }
        dispatch(putNotification(payload))
        alert("Aceptaste la invitacion satisfactoriamente")
        window.location.reload()
    }

    function handleReject(id:number){
        let payload = {
            id:id,
            attending:"NO"
        }
        dispatch(putNotification(payload))
        alert("Rechazaste la invitacion satisfactoriamente")
        window.location.reload()
    }
    return(
        <div>
            <div>Notificaciones</div>
            <div>
              {notificaciones.filter((n:any)=> n.attending === "PENDING").map((n:any)=>{
                  return(
                <div key={n.id}>
                  <span>El equipo {n.teamName} quiere invitarte a jugar el {n.day} a las {n.hour}</span>
                  <span>Para mas informacion contacta al capitan {n.userName} al siguiente numero: {n.userCell}</span>
                  <button onClick={() =>handleAccept(n.id)}>Aceptar invitacion</button>
                  <button onClick={() =>handleReject(n.id)}>Rechazar invitacion</button>
                  </div>
                )})}
              </div>
              {/* <div>{not[0].teamName}</div>
              <div>Nombre del equipo quiere invitarte a jugar el 11/12/2021 a las 17:00</div> */}
        </div>      
    )
    
}