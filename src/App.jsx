import './App.css'
import React from 'react';
import { Header } from './component/container/header/header';
import { Footer } from './component/container/footer/footer';
import { User } from './component/container/user/user';
import { Player } from './component/container/player/Player';
//un composant React
function App() {
console.log(<h1>hohohoho</h1>);
const nom = "MC"

//Composant React parametré
// eslint-disable-next-line react/prop-types
function Button({ label, color }){
  return <button style={{ backgroundColor: color}} >{label}</button>
}

  return (
    <>
      <Header/>
    <div className='flex-vertical'>
      <h1>{nom}</h1>
      {Button({ label:"valider", color: "pink" })}
      {Button({ label:"Supprimer", color: "orange"  })}
      <User/>
      <p>Player</p>
      <Player/>
      </div>
      <Footer/>
    </>
  )
}

export default App
