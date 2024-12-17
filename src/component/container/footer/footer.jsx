import './footer.css';
import { Button } from '../button/button';
export function Footer( ){
  let paragraphe = "FOOTER Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus, officiis ipsa accusamus ullam in illo unde velit deserunt, saepe, sunt consectetur fugiat laborum reprehenderit dolore natus. Facilis, in porro?"
  return (
   <footer>
    <p>Copyright 2025</p>
    <p>{paragraphe}</p>
    <Button/>
   </footer>
  )
}