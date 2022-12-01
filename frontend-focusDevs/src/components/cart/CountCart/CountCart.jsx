import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./count-cart.css";

function CountCart() {
  const { productsCart, setShowCart } = useContext(CartContext);
  const totalPrice = () => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    let total = 0;

    productsCart.forEach((product) => {
      total += product.precio * product.cantidad;
    });
    total = formatter.format(total);

    return total;
  };

  function saveSales() {
    var myHeaders = new Headers();
    let ventas = []
    myHeaders.append("Content-Type", "application/json");
    const fecha = new Date();

    productsCart.forEach((product) => {
        ventas.push({
            "imagen":product.imagen,
            "nombre":product.nombre,
            "precio":product.precio * product.cantidad,
            "cantidad":product.cantidad,
            "marca":product.marca,
            "descripcion":product.descripcion,
            "ventafecha":fecha
        }) 
      });

    console.log(ventas)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(ventas),
      redirect: "follow",
    };

    console.log(ventas)

    fetch("http://localhost:3001/ventas", requestOptions)
      .then((response) => response.text())
      .then((result) => alert("Venta realizada"))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="count-cart">
      <div className="container-count-cart">
        <div className="container-count-cart__subtotal">
          <p>subtotal ({productsCart.length} productos):</p>
          <span>{totalPrice()}</span>
        </div>
        <div className="container-count-cart__buttons">
          <button
            className="container-count-cart__buttons-buy__buttons__cancel"
            onClick={() => setShowCart(false)}
          >
            Cancelar
          </button>
          <button
            className="container-count-cart__buttons-buy__button__buy"
            onClick={() => saveSales()}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountCart;
