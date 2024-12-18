import './App.css'
import { Header } from './component/container/header/header';
import { Footer } from './component/container/footer/footer';
import { User } from './component/container/user/user';
import { Player } from './component/container/player/Player';

//un composant React
function App() {
console.log(<h1>hohohoho</h1>);
const nom = "MC"

const userData = {
  prenom: "Marie",
  nom: "Curie", 
  age: 36,
  hobbies: "radioactivité"
}
//Composant React parametré
// eslint-disable-next-line react/prop-types
function Button({ label, color }){
  return <button className='w-24 rounded-3xl'  style={{ backgroundColor: color}} >{label}</button>
}

  return (
    <>
      <Header/>
    <div className='flex-vertical'>
      <h1>{nom}</h1>
      {Button({ label:"valider", color: "pink" })}
      {Button({ label:"Supprimer", color: "orange"  })}
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
