import { useContext } from "react"
import { UtilisateurContext } from "../../../../../App"

export function FirstName (){

    const user = useContext(UtilisateurContext)
  
    return(
      <>
      <p>{user.prenom}</p>
      </>
    )
  }
