import { useContext } from 'react';
import { UtilisateurContext } from '../../../../../App';


export function LastName (){

    const user = useContext(UtilisateurContext) //UtilisateurContext

  return(<>
  <p>{user.nom}</p>
  </>
  )
}