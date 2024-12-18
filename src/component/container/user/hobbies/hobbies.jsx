import PropTypes from "prop-types";
import { Button } from "../../button/Button";
import { useState } from "react";
export function Hobbies({ hobbies: initialHobbies }) {
  const [hobbies, setHobbies] = useState(initialHobbies);
  const [HobbiesInput, setHobbiesInput] = useState("");
  const [EmptyError, setEMptyError] = useState("");

  function gereHobbie(event) {
    // Récupérer l'entrée de l'utilisateur
    const valeur = event.target.value;
    // Stocker la valeur de l'input dans la variable d'état
    setHobbiesInput(valeur);
    // Remettre à zéro l'erreur si l'utilisateur saisit quelque chose
    setEMptyError("");
  }

  function ajouterHobby() {
    if (HobbiesInput === "") {
      setEMptyError("Veuillez renseigner votre hobbie");
      return;
    }
    // Ajouter un nouveau hobby à la liste
    const newHobby = { id: hobbies.length + 1, name: HobbiesInput };
    setHobbies([...hobbies, newHobby]);
    setHobbiesInput("");
  }

  return (
    <>
      <h3>Hobbies</h3>
      <div>
        <input
          className="bg-neutral-800 p-2 w-full text-white"
          type="text"
          value={HobbiesInput}
          onChange={gereHobbie}
          placeholder="Votre hobbie"
        />
        <p className="text-red-600">{EmptyError}</p>
        <Button gereclick={ajouterHobby}>Ajouter</Button>
      </div>
      <ul>
        {hobbies.map((hobby) => (
          <li className="italic list-disc" key={hobby.id}>
            {hobby.name}
          </li>
        ))}
      </ul>
    </>
  );
}

Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
