import OrderSummary from "../components/OrderSummary";
import HeaderBQ from "../components/HeaderBQ";
import OptionMenu from "../components/OptionMenu";
import CardProducts from "../components/CardProducts";
import { getProducts } from "../helpers/api";
import { useState, useEffect } from "react";
import "../styles/showProducts.css";

export default function Desayunos() {

  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  const token = localStorage.getItem("key");

  useEffect(() => {
    getProducts(token)
      .then((res) => {
           const menu = res.data;
        setProducts(menu);
      })
      .catch((err) => console.log(err));
  }, [token]);

 
  //----------- agregar y remover productos del contador
  

  const addMenu = (product)=>{

    setOrder((oldOrder) => {
     
      // 1. identificar si el producto ya esta en la orden
      let orderProduct

      const found = oldOrder.find(element => element._id === product._id);
  
      if(found){
        // si el producto ya esta 
        // 1. guardo una referencia al producto encontrado en orderProduct
        orderProduct = found
        // 2. elimina el producto encontrado del oldOrder
        // 3. le sumo uno a su attr qty
        orderProduct.qty += 1
      } else {
        // si no esta
        // uso el producto que viene por paramatro y lo guardo en orderProduct
        orderProduct = product
        // le agrego un attr qty = 1
        orderProduct.qty = 1
      }
      // agrego orderProduct junto con oldOrder a lnuevio  estado final
      return [...oldOrder, orderProduct]
    })
    
  }
 
  
 // useEffect(() => console.log(order), [order])

  return (
    <>
      <HeaderBQ />
      <div className="show-products-menu">
          <OptionMenu />
          <div className="container-products">
            {products.map((prod, index) => {
              
              return (
                <CardProducts
                  product={prod}
                  key={index}
                  onAddMenu={() => addMenu(prod)}
                  onremoveMenu={() => addMenu(prod)-1}
                />
              );
            })}
          </div>
      </div>
      
           <OrderSummary order={order}/>
    </>
  );
}









 // const filterProducts = (optionMenu) => {
  //   const optionProducts = getProducts.filter((prod) => {
  //     return prod === optionMenu;
  //   });
