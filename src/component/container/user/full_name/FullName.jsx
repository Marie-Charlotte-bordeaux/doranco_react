import { FirstName } from "./first_name/FirstName"
import { LastName } from "./last_name/LastName"
import { useContext } from "react"
import { UtilisateurContext } from "../../../../App"

export function FullName (){
    const user = useContext(UtilisateurContext) //UtilisateurContext


  return(
    <>
    <section>
    <h3 className="underline">Nom Complet : </h3>
      <FirstName />
      <LastName/>
      <p>Âge :  ans</p>
    </section>
    </>
  )
}

