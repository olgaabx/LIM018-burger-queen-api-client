import OrderSummary from "../components/OrderSummary";
import HeaderBQ from "../components/HeaderBQ";
import OptionMenu from "../components/OptionMenu";
import ShowProducts from "../components/ShowProducts";
import { getProducts } from "../helpers/api";
import { useState, useEffect } from "react";

export default function Desayunos() {
  const [products, setProducts] = useState([]);
  // console.log('hola',{products})
  const token = localStorage.getItem('key')

  useEffect(() => {
    getProducts(token)
      .then((res) => {
        // console.log(">", res)
        // console.log(setProducts(res.data))
        const menu = res.data;
        // console.log(menu)
        setProducts(menu)
      })
      .catch((err) => console.log(err))
  }, []);

  // const filterProducts = (optionMenu) => {
  //   const optionProducts = getProducts.filter((prod) => {
  //     return prod === optionMenu;
  //   });

  // console.log(products)
  // return cardProduct;
  // console.log(cardProduct)
  
  return (
    <>
      <HeaderBQ />
      <OptionMenu />
      <div>{products.map((prod, index) => {
      // console.log(index)
        return (
          <ShowProducts
            key={index}
            id={prod._id}
            image={prod.image}
            name={prod.name}
            price={`S/. ${prod.price}`}
          />
        );
      })
      }</div>
      <OrderSummary />
    </>
  );
}
