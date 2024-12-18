import PropTypes from 'prop-types';
export function Button ({color, children, gereclick}){


  return(
    <button 
    className = "px-6 py-3 rounded-lg text-white shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:opacity-90 ${className}"
    style={{
      backgroundColor: color ? color : "black",
    }}
    onClick={gereclick}
    >
      {children}
      </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  gereclick: PropTypes.func,
  children: PropTypes.node
}