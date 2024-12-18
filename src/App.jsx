import './App.css'
import { Header } from './component/container/header/header';
import { Footer } from './component/container/footer/footer';
import { User } from './component/container/user/user';
import { Player } from './component/container/player/Player';
import { Button } from './component/container/button/button';

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
    <>
      <Header/>
    <div className='flex-vertical'>
      <h1>{nom}</h1>
      
      <Button label="Ajouter" color="pink" gereclick={ajouter} ><p>Allez Ajoute!</p></Button>
      <Button label="Supprimer" color="orange" gereclick={supprimer} ><p>Allez Supprime!</p></Button>
      <User 
        prenom={userData.prenom} 
        nom={userData.nom} 
        age={userData.age} 
        hobbies={userData.hobbies} 
      />
      <p>Player</p>
      <Player/>
      </div>
      <Footer/>
    </>
  )
}

export default App
