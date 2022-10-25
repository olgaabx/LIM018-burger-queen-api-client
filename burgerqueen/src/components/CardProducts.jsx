import ButtonSend from './ButtonSend'
import '../styles/showProducts.css'

export default function CardProducts(props) {

  return (
    <div className="food-card">
      <img src={props.image} alt={props.name} className="img-products"/>
      <p className="name-product">{props.name}</p>
      <p className="price-product">Costo:{props.price}</p>
      <ButtonSend id={props.id} add={props.addMenu} title="añadir"  whenClick={props.addMenu}/>
     
    </div>
  )
}
