import React from 'react'
import { useDispatch } from 'react-redux'
import { putNotificationTeams } from '../../redux/actions'
import { playersPosition } from "../Teams/Funciones/PlayersPosition"

export default function JugadorUnir(props:any){
    const dispatch = useDispatch()

    function handleAccept(id:number){
        let payload = {
            id:id,
            attending:"YES"
        }
        dispatch(putNotificationTeams(payload))
        alert("Aceptaste la invitación satisfactoriamente")
        window.location.reload()
    }

    function handleReject(id:number){
        let payload = {
            id:id,
            attending:"NO"
        }
        dispatch(putNotificationTeams(payload))
        alert("Rechazaste la invitación satisfactoriamente")
        window.location.reload()
    }

    return(
        <div>
            <span>{props.teamName}</span>
            {props.notificaciones?.map((n:any) =>{
                return(
                    <div key ={n.notificationId}>
                    <div>El jugador {n.playerName} quiere unirse a tu equipo</div>
                    <div>Su posicion en la cancha es de {playersPosition(n.playerPosition)} y obtuvo una calificacion de {n.playerQualification}</div>
                    <div>Si queres tener mas informacion contactalo al: {n.playerCell}</div>
                    <button onClick={() =>handleAccept(n.notificationId)}>Aceptar invitacion</button>
                    <button onClick={() =>handleReject(n.notificationId)}>Rechazar invitacion</button>
                    </div>
                )
            })}
        </div>

    )
}
