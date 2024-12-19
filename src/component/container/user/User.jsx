import { FullName } from "./full_name/FullName";
import  Hobbies  from "./hobbies/Hobbies";

export function User (){

  return(
    <>
    <section>
    <h2 className="font-extrabold	 ">Information utilsateur</h2>
    <FullName  />
    <Hobbies  />
    </section>
    </>  
    
)
}
