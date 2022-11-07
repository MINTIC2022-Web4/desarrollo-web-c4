import React, { useContext } from "react";
import "./detailproducts.css";
import tiempoEntrega from "../../assets/detailproducts/entrega.svg";
import button from "../../assets/detailproducts/add.svg";
import { CartContext } from "../../context/CartContext";
import useCart from "../../hooks/useCart";

const DetailProducts = () => {
  const { addProductsCart } = useCart()
  const img =
    "https://images.samsung.com/is/image/samsung/pe-f390fhl-lc24f390fhlxpe-frontblack-249123527?$650_519_PNG$";
  //const tiempoEntrega = "src\assets\detailproducts";

  const info = {
    imagen:
      "https://images.samsung.com/is/image/samsung/pe-f390fhl-lc24f390fhlxpe-frontblack-249123527?$650_519_PNG$",
    nombre: "Monitor Curvo FHD de 24'' HDMi",
    precio: "1.600.000",
    cantidad: 9,
    marca: "Samsung",
  };

  const handleSendProductsToCart = (product) => {
    addProductsCart(product);
  };

  return (
    <>
      <div className="parent">
        <div className="row-breadcrumb">
          {`Home > Detalle Productos > Monitor Samsung`}
        </div>
        <div className="detail-container">
          <div className="detail-container-img">
            {" "}
            <img src={info.imagen} alt="" />
          </div>
          <div className="detail-container-info">
            <div className="detail-product-info">
              <div class="product-info">{info.nombre}</div>
              <div class="product-info">{info.marca}</div>
              <div class="product-info">
                <img src={tiempoEntrega} alt="" />
              </div>
              <div class="product-info">
                <span>Stock: </span> <span>{info.cantidad}</span>
              </div>
              <div class="product-info">
                <a href="#" onClick={() => handleSendProductsToCart(info)}>
                  <img src={button} alt="" />
                </a>
              </div>
              <div class="product- ">{info.precio}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProducts;
