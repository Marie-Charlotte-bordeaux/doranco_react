import './footer.css';
import { Button } from '../button/button';
export function Footer( ){
  let paragraphe = "FOOTER Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus, officiis ipsa accusamus ullam in illo unde velit deserunt, saepe, sunt consectetur fugiat laborum reprehenderit dolore natus. Facilis, in porro?"
 
  function contact() {
    alert('contact')
  }
 
  return (
   <footer>
    <p className='italic'>Copyright 2025</p>
    <p className='text-center text-xs'>{paragraphe}</p>
    <Button color={'pink'} gereclick={contact}>
      <p>Allez click!</p>
    </Button>
   </footer>
  )
}