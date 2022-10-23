import OrderSummary from "../components/OrderSummary"
import HeaderBQ from "../components/HeaderBQ"
import OptionMenu from '../components/OptionMenu';
import ShowProducts from '../components/ShowProducts';
import {getProducts} from '../helpers/api'
import {useState ,useEffect} from 'react'


  
export default function Desayunos() {


const [products, setProducts] = useState([]);
console.log('hola',{products})

useEffect(()=>{
  console.log('dentro de useeffect')
},[])

const filterProducts = (optionMenu) =>{

const optionProducts = getProducts.filter((prod)=>{
  return prod === optionMenu
})

  const cardProduct = optionProducts.map((prod,index) => {
        return <ShowProducts 
                      key={index}
                      id = {prod._id}
                      image = {prod.image} 
                      name = {prod.name}                    
                      price = {`S/. ${prod.price}`} 
        
      />
      })
  return cardProduct;
}


  return (
    <>
   
    <HeaderBQ/>
    <OptionMenu/>
    <div > {filterProducts()}</div>
    <OrderSummary/>
    </>
  )
}
