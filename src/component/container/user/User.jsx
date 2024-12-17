import { FullName } from "./full_name/FullName";
import { Hobbies } from "./hobbies/hobbies"; 

export function User (){

  return(
    <><p>Je suis  </p><FullName /> <p>
      et j aime faire du 
      </p>
      <Hobbies /></>  
    
)
}