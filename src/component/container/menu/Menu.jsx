import { Button } from "../button/Button";
import { useState } from "react";
export default function Menu (){

  const [hide, changeState] = useState(true);
/**
 * 
 * true ==> cache le menu
 */

function hideShow() {
  changeState(!hide)
  console.log('(:::::::::::::::', hide)
}


  return(
    <>
    <div>
    <Button
    gereclick={hideShow}
    color={"darkPink"}
    >/\</Button>
    <section className={hide ? "hidden" : ""}>
      <h2>Menu</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </section>
    </div>

    </>
  )
}