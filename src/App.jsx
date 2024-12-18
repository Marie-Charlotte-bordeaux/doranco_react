import './App.css'
import { Header } from './component/container/header/header';
import { Footer } from './component/container/footer/footer';
import { User } from './component/container/user/user';
import { Player } from './component/container/player/Player';
import { Button } from './component/container/button/button';
import { Routine } from './component/container/routine/Routine';

//un composant React
function App() {
console.log(<h1>hohohoho</h1>);
const nom = "MC"

const userData = {
  prenom: "Marie",
  nom: "Curie", 
  age: 36,
  hobbies: [
    {id:"0a", name:"radioactivité"},
    {id:"0b", name:"uranium"},
  ]
}
function ajouter(){
  alert(' Vous avez ajouté')
}
function supprimer(){
  alert('Vous avez supprimé')
}


  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen flex flex-col justify-between text-gray-200">
    <Header />
    <div className="container mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-100 tracking-wide">
          {nom}
        </h1>

        <div className="flex space-x-4">
          <Button
            label="Ajouter"
            color="pink"
            gereclick={ajouter}
            className="transition-transform transform hover:scale-105"
          >
            <p className="text-white font-semibold text-lg">Allez Ajoute !</p>
          </Button>
          <Button
            label="Supprimer"
            color="orange"
            gereclick={supprimer}
            className="transition-transform transform hover:scale-105"
          >
            <p className="text-white font-semibold text-lg">Allez Supprime !</p>
          </Button>
        </div>

        <div className="w-full mt-4">
          <Routine />
        </div>

        <div className="w-full">
          <User
            prenom={userData.prenom}
            nom={userData.nom}
            age={userData.age}
            hobbies={userData.hobbies}
          />
        </div>

        <div className="w-full text-center">
          <p className="text-2xl font-semibold text-gray-300">🎵 Player 🎵</p>
          <Player />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default App
