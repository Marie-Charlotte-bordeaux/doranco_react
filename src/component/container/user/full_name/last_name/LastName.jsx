import PropTypes from 'prop-types';


export function LastName ({ nom }){


  return(<>
  <p>Nom : {nom}</p>
  </>
  )
}


LastName.propTypes = {
  nom: PropTypes.string,
  }