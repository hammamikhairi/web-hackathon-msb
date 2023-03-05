import useFetch from "../../Components/Hooks/useFetch";
import './PickStock.sass';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from "../PopUp/PopUp";



const Picking = () => {

  const { data, isPending, error } = useFetch('http://localhost:5050/picking')
  const [popupVisible, setPopupVisible] = useState(false);

  if (isPending) {
    return <>Stana</>
  }


  function handlePopupSubmit(inputValue) {
    console.log(`User entered: ${inputValue}`);
    setPopupVisible(false);
  }

  function showPopup() {
    setPopupVisible(true);
  }


  data["Picking"].sort((a, b) => {
    let divisionA = a.Quantite / a.Capacite;
    let divisionB = b.Quantite / b.Capacite;
    if (divisionA < divisionB) {
      return -1;
    } else if (divisionA > divisionB) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <>
      {
        popupVisible && <Popup onSubmit={handlePopupSubmit} />
      }
      {
        data["Picking"].map((item, index) => <Element key={index} Pop={showPopup} Emplacement={item.Emplacement} Article={item.Article} Capacite={item.Capacite} Quantite={item.Quantite} />)
      }
    </>
   );
}

export default Picking;

function refill(art) {
  fetch('http://localhost:5051/refill?currId=' + art).then(res => res.json()).then(res => console.log(res))
}

const Element = ({Emplacement, Quantite, Capacite, Article, Pop}) => {


  console.log(Emplacement, Quantite, Capacite, Article)

  if (Math.round((Quantite/Capacite)*100) < 20) {
    toast.warning(`${Article}'s Quantity (${Quantite}) is lower than 20%!`, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }


  return (
    <div className="element__container">
      <div className="element__emplacement">
        <h1>{Article}</h1>
        <span>{Emplacement}</span>
      </div>
      <div className="buttons">
        {
          Math.round((Quantite/Capacite)*100) < 35   &&
          <button className="element__button" onClick={() => refill(Article)}>Refill</button>
        }
        <button className="element__button" onClick={() => {}}>Reduce</button>
      </div>
      <div className="element__quantite">
        <span>{Math.round((Quantite/Capacite)*100)}%</span>
      </div>
    </div>
  )
}