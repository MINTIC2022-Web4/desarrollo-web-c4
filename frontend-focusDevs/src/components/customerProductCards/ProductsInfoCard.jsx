import React, { useContext } from "react";
import icon from "../../assets/customerProductsCard/Vector.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "wouter";
import useCart from "../../hooks/useCart";

const ProductsInfoCard = ({ productsInfo, loading }) => {
  const { addProductsCart } = useCart();

  const labels = {
    textmarca: "Marca: ",
    textPrecio: "Stock: ",
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleSendProductsToCart = (product) => {
    addProductsCart(product);
  };

  return (
    <>
      <div className="product-row">
        {productsInfo.map((info) => (
          <div key={info._id} className="product-container">
            <a
              href="#"
              className="item1"
              onClick={() => handleSendProductsToCart(info)}
            >
              <img src={icon} alt="" />
            </a>
            <div className="item2">
              
               <Link to={`/detail-products/${info._id}`}>
                <img src={info.imagen} alt="" onClick={""} />
              </Link>
            </div>
            <div className="item3">{info.nombre}</div>
            <div className="item4">{labels.textmarca}</div>
            <div className="item5">{info.marca}</div>
            <div className="item6">{info.precio}</div>
            <div className="item7">
              {labels.textPrecio} <span>{info.cantidad}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsInfoCard;
