export function Hobbies (){

const hobbiesDB = ['lire', 'écouter de la musique', 'randonner']
/*
const hobbiesMDB = [
  {id:"0a", name:"lire"}, {id:"0b", name:"écouter de la musique"}, {id:"0c", name:"randonner"}
]
 <ul>
{hobbiesMDB.map((hobbyOneKeno) => {
  return (
  <li key={hobbiesMDB.id}
  style={{
    padding: "10px",
    border: "1px solid white",
    margin:"0.5rem"
  }}>
    {hobbyOneKeno}
    </li>)
})}
</ul> */


// const hobbieOne = [];

// for (let i = 0; i < hobbiesDB.length; i++){
//   hobbieOne.at(<p>{hobbiesDB[i]}</p>)
// }

    return(
      <>
      <ul>
        {hobbiesDB.map((hobbyOne, index) => {
          return (
          <li key={index}
          style={{
            padding: "10px",
            border: "1px solid white",
            margin:"0.5rem"
          }}>
            {hobbyOne}
            </li>)
        })}
      </ul>
      </>

    )
  }