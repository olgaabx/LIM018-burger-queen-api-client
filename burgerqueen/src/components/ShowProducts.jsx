import ButtonSend from './ButtonSend'
import '../styles/showProducts.css'

export default function ShowProducts(props) {
  return (
    <div className="food-card">
      <img src={props.image} alt={props.name} className="img-products"/>
      <p className="name-product">{props.name}</p>
      <p className="price-product">Costo:{props.price}</p>
      <ButtonSend title="enviar"/>
      <ButtonSend title="quitar"/>
    </div>
  )
}
