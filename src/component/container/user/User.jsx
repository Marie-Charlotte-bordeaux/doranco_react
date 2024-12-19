import { FullName } from "./full_name/FullName";
import  Hobbies  from "./hobbies/Hobbies";
import PropTypes from 'prop-types';

export function User ({ prenom, nom, age, hobbies }){

  return(
    <>
    <section>
    <h2 className="font-extrabold	 ">Information utilsateur</h2>
    <FullName prenom={prenom} nom={nom} age={age} />
    <Hobbies hobbies={hobbies} />
    </section>
    </>  
    
)
}


User.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired, 
}