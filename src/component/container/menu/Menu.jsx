import { Button } from "../button/Button";
import { useState } from "react";
export default function Menu() {
  const [hide, changeState] = useState(true);
  /**
   *
   * true ==> cache le menu
   */

  function hideShow() {
    changeState(!hide);
  }

  return (
    <>
      <div className="flex flex-col items-center p-4 bg-gray-800 ">
        <Button gereclick={hideShow} >
          <span className="text-2xl">&#x25B2;</span>
        </Button>
        <section
          className={`${
            hide ? "hidden" : "block"
          } transition-all duration-300 ease-in-out mt-6 bg-gray-500 shadow-xl rounded-lg p-6 w-64`}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Menu</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
              1
            </li>
            <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
              2
            </li>
            <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
              3
            </li>
            <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
              4
            </li>
            <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
              5
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
