import { GridLoader } from 'react-spinners';
import './loader.scss'

function Loader({ color }) {
   return (
      <div className='loader'>
         <GridLoader
            color={color}
            size={15}
         />
      </div>
   )
}

export default Loader