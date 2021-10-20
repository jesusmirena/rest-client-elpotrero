import React from 'react'

export default function CardTeam(props:any){

    return(
        <div>
            <span>{props.teamName}</span>
            {props.notificaciones?.map((n:any) =>{
                if(n.attending === "NO"){
                return(
                    <div key ={n.notifactionId}>
                    <div>El jugador {n.playerName} rechazo tu invitacion a jugar el dia {n.day} a las {n.hour}</div>
                    </div> 
                )
                }
                if(n.attending === "YES"){
                return(
                    <div key ={n.notifactionId}>
                    <div>El jugador {n.playerName} acepto tu invitacion a jugar el dia {n.day} a las {n.hour}</div>
                    </div> 
                )
                }
            else{
                return(
                    <div key ={n.notifactionId}>
                    <div>El jugador {n.playerName} no respondio aun</div>
                    </div> 
                )
            }
                
            })}
        </div>
    )

}
