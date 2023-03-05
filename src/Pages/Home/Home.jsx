import { useState } from 'react';
import Picking from '../SubPages/PickingStock/Picking';
import Stock from '../SubPages/PickingStock/Stockage';
import './check.scss';
import './home.sass';
const Home = () => {

  const [isPicking, SetIsPicking] = useState(false)


  return (
    <div className="home__container">
      <div className="picker__container">
        <div className="switch-button">
          <input className="switch-button-checkbox" type="checkbox" onChange={event => {SetIsPicking(event.target.checked)}}></input>
          <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Picking</span></label>
        </div>
      </div>

      <div className="tables__container">

      {
        isPicking ? <Stock /> : <Picking />
      }

      </div>
    </div>
   );
}
 
export default Home;


