import { FirstName } from "./first_name/FirstName"
import { LastName } from "./last_name/LastName"
import PropTypes from 'prop-types';

export function FullName ({ prenom, nom, age}){


  return(
    <>
    <section>
    <h3>Nom Complet : </h3>
      <FirstName prenom={prenom} />
      <LastName nom={nom} />
      <p>Âge : {age} ans</p>
    </section>
    </>
  )
}


FullName.propTypes = {
  prenom: PropTypes.string,
  nom: PropTypes.string,
  age: PropTypes.number,
}