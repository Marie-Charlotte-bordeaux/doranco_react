import { Button } from "../button/Button";
import { useState } from "react";
import PropTypes from 'prop-types';
export default function Menu( {children}) {
  const [hide, changeState] = useState(true);
  /**
   *
   * true ==> cache le menu
   */

  function toggleVisibility() {
    changeState(!hide);
  }

  return (
    <>
      <div className="flex flex-col items-center p-4 bg-gray-800 ">
        <Button gereclick={toggleVisibility} >
          <span className="text-2xl">&#x25B2;</span>
        </Button>
        <section
          className={`${
            hide ? "hidden" : "block"
          } transition-all duration-300 ease-in-out mt-6 bg-gray-500 shadow-xl rounded-lg p-6 w-64`}
        >
          {children}
        </section>
      </div>
    </>
  );
}


Menu.propTypes = {
  children: PropTypes.node,
}