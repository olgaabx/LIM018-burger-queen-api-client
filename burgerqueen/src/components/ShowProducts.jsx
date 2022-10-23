import ButtonSend from './ButtonSend'
import '../styles/showProducts.css'

export default function ShowProducts(props) {
  return (

    <div key={props.key} className="food-card">
        <img src={props.image} alt={props.name} className="img-products"/>
        <p className="name-product">{props.name}</p>
        <p className="price-product">Costo:{props.price}</p>
       <ButtonSend key={props._id}>Enviar</ButtonSend>
       <ButtonSend key={props._id} >Quita</ButtonSend>
     
   </div>
     
   
  )
}
