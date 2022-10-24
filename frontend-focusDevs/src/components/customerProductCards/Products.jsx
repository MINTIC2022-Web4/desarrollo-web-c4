import React from "react";
import icon from "../../assets/customerProductsCard/Vector.svg";

const Products = ({ products, loading }) => {
  const labels ={
    textmarca:"Marca: ",
    textPrecio:"Stock: "
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div class="product-row">
        {products.map(info => (
          <div className = "product-container">
            <a href="#" class="item1">
              <img src={icon} alt="" />
            </a>
            <div class="item2">
              <img src={info.imagen} alt="" />
            </div>
            <div className="item3">{info.nombre}</div>
            <div className="item4">{labels.textmarca}</div>
            <div className="item5">{info.marca}</div>
            <div className="item6">{info.precio}</div>
            <div className="item7">{labels.textPrecio} <span>{info.cantidad}</span></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
