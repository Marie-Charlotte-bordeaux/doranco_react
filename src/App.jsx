import './App.css'
import { Header } from './component/container/header/Header';
import { Footer } from './component/container/footer/Footer';
import { User } from './component/container/user/user';
import { Player } from './component/container/player/Player';
import { Button } from './component/container/button/Button';
import { Routine } from './component/container/routine/Routine';
import  Compteur  from './component/container/compteur/Compteur';
import { Got } from './component/container/got/Got';
import Menu from './component/container/menu/Menu';
import { ContactForm } from './component/container/contactForm/Contact-form';
import { createContext, useEffect, useState } from 'react';
//un composant React
export const UtilisateurContext = createContext();
function App() {
const user = {
  prenom: "Marie",
  nom: "Curie",
  age: 36,
  hobbies: [
    {id:"0a", name:"radioactivité"},
    {id:"0b", name:"uranium"},
  ]
}

const [time, setTime] = useState(new Date());
const [misAJour, setMisAJour] = useState(false);

useEffect(()=> {
  const interval = setInterval(()=> {setTime(new Date())}, 1000); 
  return () => {
    clearInterval(interval);
  }
}, [])

const nom = "MC"

function ajouter(){
  alert(' Vous avez ajouté')
}
function supprimer(){
  alert('Vous avez supprimé')
}


  return (
<UtilisateurContext.Provider value={user}>

<div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col justify-between text-gray-300">
  {/* Horloge élégante */}
  <p className="text-4xl font-bold text-center text-indigo-300 bg-gradient-to-r from-purple-900 to-pink-900 rounded-full shadow-lg p-6 w-64 mx-auto mt-8">
    {time.toLocaleTimeString()}
  </p>

  {/* En-tête */}
  <Header />

  {/* Bouton de rafraîchissement */}
  <button
    onClick={() => setMisAJour(!misAJour)}
    className="mt-4 w-12 h-12 bg-purple-700 hover:bg-purple-900 text-white font-bold rounded-full transition-transform transform hover:rotate-180 ease-in-out inline-flex items-center justify-center shadow-xl mx-auto"
  >
    ↻
  </button>

  {/* Contenu principal */}
  <div className="container mx-auto p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl">
    <div className="flex flex-col items-center space-y-8">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        {nom}
      </h1>

<Got/>

      {/* Formulaire de contact */}
      <ContactForm />

      {/* Menu avec compteur */}
      <Menu>
        <Compteur />
      </Menu>

      {/* Boutons d'actions */}
      <div className="flex space-x-6">
        <Button
          label="Ajouter"
          color="pink"
          gereclick={ajouter}
          className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
        >
          <p className="text-white font-semibold text-lg">Ajoutez !</p>
        </Button>
        <Button
          label="Supprimer"
          color="orange"
          gereclick={supprimer}
          className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
        >
          <p className="text-white font-semibold text-lg">Supprimez !</p>
        </Button>
      </div>

      {/* Section Routine */}
      <div className="w-full mt-6">
        <Routine />
      </div>

      {/* Section Utilisateur */}
      <div className="w-full">
        <User />
      </div>

      {/* Lecteur de musique */}
      <div className="w-full text-center">
        <p className="text-2xl font-semibold text-indigo-400 mb-2">🎵 Music Player 🎵</p>
        <Player />
      </div>
    </div>
  </div>

  {/* Pied de page */}
  <Footer />
</div>

    </UtilisateurContext.Provider>
  )
}

export default App
