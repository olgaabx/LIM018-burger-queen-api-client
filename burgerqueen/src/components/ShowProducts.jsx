import React from 'react'
import '../styles/showProducts.css'

export default function ShowProducts() {
  return (
    <div className="menu-container">
      <div className="food-card">
        <img src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png" alt="" />
        <p className="name-product">Hamburguesa simple</p>
        <p className="price-product">Costo: </p>
        <button className="add-product-button">Añadir</button>
      </div>
    </div>
  )
}
