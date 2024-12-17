export function Player (){

  const score = 12;

    const compar = score >10 ?  "Vainqueur" : "Perdant ! BOUH " + score;
 

  return(
<>
<p>
  {
    compar
  }
</p>
</>
  )
}