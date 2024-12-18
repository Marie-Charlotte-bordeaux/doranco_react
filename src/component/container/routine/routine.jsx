import PropTypes, { func } from 'prop-types';
import { Button } from '../button/button';
export function Routine (){

function manger() {
  alert('Vous avez mange')
}

function dormir() {
  alert('Vous avez dormi')
}

function etudier() {
  alert('Vous avez etudie') 
}

  return(
    <> <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-pink-900 rounded-lg shadow-lg w-full max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Ma Routine</h2>
    <Button gereclick={manger}>
      <p className="text-white font-semibold">Manger</p>
    </Button>
    <Button gereclick={dormir}>
      <p className="text-white font-semibold">Dormir</p>
    </Button>
    <Button gereclick={etudier}>
      <p className="text-white font-semibold">Étudier</p>
    </Button>
  </div>
    </>
  )
}

Routine.propTypes = {

}