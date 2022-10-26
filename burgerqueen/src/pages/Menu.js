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
    // setOrder([...order].push(product)) asi no se debe hacer
    //setOrder((order) =>  [...order].push({product})) este no funciono
    setOrder((order) =>  [...order, {product}])
    
  }
 
   const removeMenu = ()=>{
    
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
                  removeMenu={removeMenu}
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
