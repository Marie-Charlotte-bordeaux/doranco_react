import { FullName } from "./full_name/FullName";
import { Hobbies } from "./hobbies/hobbies"; 
import PropTypes from 'prop-types';

export function User ({ prenom, nom, age, hobbies }){

  return(
    <>
    <section>
    <h2>Information utilsateur</h2>
    <FullName prenom={prenom} nom={nom} age={age} />
    <Hobbies hobbies={hobbies} />
    </section>
    </>  
    
)
}


User.propTypes = {
  prenom: PropTypes.string,
  nom: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.string,
}