import PropTypes from 'prop-types';

export function Hobbies ({ hobbies  }){

    return(
      <>
  <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      </>

    )
  }

  Hobbies.propTypes = {
    hobbies : PropTypes.string
    }