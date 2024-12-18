import { Button } from "../button/Button"
import { useState} from "react"

export default function Compteur (){

  const [compteur, changeCompteur] = useState(0);

  function increment() {
    changeCompteur(compteur + 1)
  }

  function decrement() {
    changeCompteur(compteur - 1)
  }


  return(
  
  <>
 <div className="flex justify-center items-center ">
    <section className="bg-gray-500 p-5 rounded-lg shadow-lg max-w-sm w-full text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Compteur</h2>
      <p className="text-5xl font-bold text-blue-100 mb-6">{compteur}</p>
      <div className="flex justify-center space-x-4">
        <Button 
        color={"darkred"}
          gereclick={decrement} 
          className=" text-white py-2 px-4 rounded-full  transition duration-200"
        >
          -
        </Button>
        <Button 
        color={"darkgreen"}
          gereclick={increment} 
          className=" text-white py-2 px-4 rounded-full  transition duration-200"
        >
          +
        </Button>
      </div>
    </section>
  </div>
  </>

  )
}