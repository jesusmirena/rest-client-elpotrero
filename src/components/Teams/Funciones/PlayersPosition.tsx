export function playersPosition(el: any){
  if(el === "ATTACKER" ) return "ATACANTE";
  if(el === "MIDFIELDER" ) return "MEDIOCAMPISTA";
  if(el === "GOALKEEPER" ) return "ARQUERO";
  if(el === "DEFENDER" ) return "DEFENSOR";
}