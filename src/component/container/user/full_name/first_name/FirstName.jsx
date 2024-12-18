import PropTypes from 'prop-types';
export function FirstName ({ prenom }){

  
    return(
      <>
      <p>Prénom : {prenom}</p>
      </>
    )
  }

  FirstName.propTypes = {
    prenom: PropTypes.string
  }