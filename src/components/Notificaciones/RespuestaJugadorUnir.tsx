import React from 'react'

export default function RespuestaJugadorUnir(props:any){

 if(props.attending === "NO"){
     return(
        <div>
        <div>Lamentamos informale que el equipo {props.teamName} rechazo su pedido para unirte al equipo</div>
        </div>
     )
 }

 if(props.attending === "YES"){
    return(
        <div>
        <div>Felicitaciones!! el equipo {props.teamName} acepto que te unieras </div>
        </div>
     )
 }

    return(
        <div>
        <div>El equipo {props.teamName} todavia no respondio a tu solicitud </div>
        </div>
     )
 

}