import { Button } from '../button/button';
import PropTypes from 'prop-types';
export function Routine (){

/* const test = (event) => {
    console.log(event)
  }

  <input onChange={test} />
*/
function alertMoi(action){
  alert(action)
}
  return(
    <> <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-pink-900 rounded-lg shadow-lg w-full max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Ma Routine</h2>
    <Button gereclick={function( ){alertMoi('Vous avez mangé')}}>
      <p className="text-white font-semibold">Manger</p>
    </Button>
    <Button gereclick={ () => {alertMoi('Vous avez dormi')}}>
      <p className="text-white font-semibold">Dormir</p>
    </Button>
    <Button gereclick={() => {alertMoi('Vous avez étudié')}}>
      <p className="text-white font-semibold">Étudier</p>
    </Button>
  </div>
    </>
  )
}

Routine.propTypes = {

}