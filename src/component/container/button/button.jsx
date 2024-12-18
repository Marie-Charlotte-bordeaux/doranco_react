import PropTypes from 'prop-types';
export function Button ({color, children}){


  return(
    <button 
    className = "bg-sky-500/50 w-24 decoration-slate-50  b-none p-2 rounded-full hover:bg-slate-50 shadow-lg hover:shadow-cyan-500/50"
    style={{
      backgroundColor: color ? color : "black",
    }}
    >
      {children}
      </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
}