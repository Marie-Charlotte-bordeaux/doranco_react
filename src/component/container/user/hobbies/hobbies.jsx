import { UtilisateurContext } from "../../../../App";
import { useContext } from "react";
import { Button } from "../../button/Button";
import { useState } from "react";

export default function Hobbies() {

  const user = useContext(UtilisateurContext)

  const [hobbyInput, setHobbyInput] = useState('')
  const [hobbyError, setHobbyError] = useState('')

  const [newHobbies, setNewHobbies] = useState(user.hobbies);

  function gereHobbyInput(e) {
    setHobbyInput(e.target.value);
    setHobbyError("");
  }

  function ajouteHobby() {
    if (hobbyInput === "") {
      setHobbyError('Nom du hobby obligatoire !')
      return
    }
    setNewHobbies([...newHobbies, { id: Date.now(), name: hobbyInput }]);
  }
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
    {/* Input pour le hobby */}
    <div className="mb-4">
      <input
        type="text"
        onChange={gereHobbyInput}
        placeholder="Entrez un hobby"
        className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {hobbyError && (
        <p className="mt-2 text-sm text-red-500">{hobbyError}</p>
      )}
    </div>
  
    {/* Bouton pour ajouter */}
    <div className="mb-6">
      <Button
        gereclick={ajouteHobby}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
      >
        Ajouter
      </Button>
    </div>
  
    {/* Liste des hobbies */}
    <ul className="space-y-2">
      {newHobbies.map((hobby) => (
        <li
          key={hobby.id}
          className="p-3 bg-gray-700 text-white rounded-md border border-gray-600"
        >
          {hobby.name}
        </li>
      ))}
    </ul>
  </div>
  

  )
}
