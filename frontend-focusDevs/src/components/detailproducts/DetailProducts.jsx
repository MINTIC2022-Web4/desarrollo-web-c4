import "./detailproducts.css";
import tiempoEntrega from "../../assets/detailproducts/entrega.svg";
import button from "../../assets/detailproducts/add.svg";
import useCart from "../../hooks/useCart";
import React, { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/pruebas/",
});

const DetailProducts = ({ id }) => {
  const { addProductsCart } = useCart();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `http://localhost:3001/pruebas/${parseInt(id)}`
      );
      setInfo(res.data.data);
    };

    fetchProduct();
  }, []);

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
              <div className="product-info">{info.nombre}</div>
              <div className="product-info">{info.marca}</div>
              <div className="product-info">
                <img src={tiempoEntrega} alt="" />
              </div>
              <div className="product-info">
                <span>Stock: </span> <span>{info.cantidad}</span>
              </div>
              <div className="product-info">
                <a href="#" onClick={() => handleSendProductsToCart(info)}>
                  <img src={button} alt="" />
                </a>
              </div>
              <div className="product- ">{info.precio}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProducts;
