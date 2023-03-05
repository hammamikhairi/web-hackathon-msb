import useFetch from "../../Components/Hooks/useFetch";
import './PickStock.sass';


const Stock = () => {

  const { data, isPending, error } = useFetch('http://localhost:5050/stock')

  if (isPending) {
    return <>Stana</>
  }


  return (
    <>
      {
        data["Produits"].map((item, index) => <Element key={index} Emplacement={item.Emplacement} Article={item.Article}Quantite={item.Quantite} />)
      }
    </>
   );
}

export default Stock;

const Element = ({Emplacement, Quantite, Article}) => {

  console.log(Emplacement, Quantite, Article)
  return (
    <div className="element__container">
      <div className="element__emplacement">
        <h1>{Article}</h1>
        <span>{Emplacement}</span>
      </div>
      <div className="element__quantite">
        <span>{Quantite}</span>
      </div>
    </div>
  )
}