import React from "react";
import "./customerProductCards.css";
import icon from "../../assets/customerProductsCard/Vector.svg";
import img from "../../assets/customerProductsCard/pc1.png";

const InfoProducts = [
  {
    icon: icon,
    image: img,
    description: "Monitor SAMSUNG Gamer 32 pulgadas G55TQ Negro",
    textmarca: "Marca",
    marca: "Samsung",
    precio: "$1,661.000",
    textPrecio: "con IVA",
  },
  {
    icon: icon,
    image: img,
    description: "prueba1",
    textmarca: "Marca",
    marca: "Samsung",
    precio: "$1,661.000",
    textPrecio: "con IVA",
  },
  {
    icon: icon,
    image: img,
    description: "prueba2",
    textmarca: "Marca",
    marca: "Samsung",
    precio: "$1,661.000",
    textPrecio: "con IVA",
  },
  {
    icon: icon,
    image: img,
    description: "prueba3",
    textmarca: "Marca",
    marca: "Samsung",
    precio: "$1,661.000",
    textPrecio: "con IVA",
  },
  {
    icon: icon,
    image: img,
    description: "prueba4",
    textmarca: "Marca",
    marca: "Samsung",
    precio: "$1,661.000",
    textPrecio: "con IVA",
  },
];

const CustomerProductCards = () => {
  return (
    <>
      <div class="product-row">
        {InfoProducts.map((info, index) => (
          <div class="product-container">
            <a href="#" class="item1">
              <img src={info.icon} alt="" />
            </a>
            <div class="item2">
              <img src={info.image} alt="" />
            </div>
            <div class="item3">{info.description}</div>
            <div class="item4">{info.textmarca}</div>
            <div class="item5">{info.marca}</div>
            <div class="item6">{info.precio}</div>
            <div class="item7">{info.textPrecio}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerProductCards;
