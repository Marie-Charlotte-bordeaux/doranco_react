import './header.css';
export function Header( ){
  let paragraphe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus, officiis ipsa accusamus ullam in illo unde velit deserunt, saepe, sunt consectetur fugiat laborum reprehenderit dolore natus. Facilis, in porro?"
  return (
    <header className="flex-verti">
      <h1>Bienvenue chez moi !</h1>
      <p> {paragraphe} </p>
    </header>
  )
}