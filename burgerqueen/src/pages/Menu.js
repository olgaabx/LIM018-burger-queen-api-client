import OrderSummary from "../components/OrderSummary";
import HeaderBQ from "../components/HeaderBQ";
import OptionMenu from "../components/OptionMenu";
import CardProducts from "../components/CardProducts";
import { getProducts } from "../helpers/api";
import { useState, useEffect } from "react";
import "../styles/showProducts.css";

export default function Desayunos() {
  const [products, setProducts] = useState([]);

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
  const [counterProduct, setCounterProduct] = useState(0)

  const addMenu = ()=>{
    setCounterProduct(counterProduct+1)
  }
 
   const removeMenu = ()=>{
    setCounterProduct(counterProduct-1)
   }

  return (
    <>
      <HeaderBQ />
      <div className="show-products-menu">
          <OptionMenu />
          <div className="container-products">
            {products.map((prod, index) => {
              
              return (
                <CardProducts
                  key={index}
                  id={prod._id}
                  image={prod.image}
                  name={prod.name}
                  price={`S/. ${prod.price}`}
                  addMenu={addMenu}
                  removeMenu={removeMenu}
                />
              );
            })}
          </div>
      </div>
           <OrderSummary  productsChosen={[]}/>
    </>
  );
}









 // const filterProducts = (optionMenu) => {
  //   const optionProducts = getProducts.filter((prod) => {
  //     return prod === optionMenu;
  //   });
