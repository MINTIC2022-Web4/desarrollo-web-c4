import React, { useState, useEffect } from "react";
import "./detailproducts.css";
import tiempoEntrega from "../../assets/detailproducts/entrega.svg";
import button from "../../assets/detailproducts/add.svg";

const DetailProducts = () => {
  const img =
    "https://images.samsung.com/is/image/samsung/pe-f390fhl-lc24f390fhlxpe-frontblack-249123527?$650_519_PNG$";
  //const tiempoEntrega = "src\assets\detailproducts";

  return (
    <>
      <div>
        <div className="row-breadcrumb">
          <span>Home</span>
          <span>{">"}</span>
          <span>Productos</span>
          <span>{">"}</span>
          <span>Monitor Samsung</span>
        </div>
        <div className="detail-container">
          <div className="detail-container-img">
            {" "}
            <img src={img} alt="" />
          </div>
          <div className="detail-container-info">
            <div className="detail-product-info">
              <div class="product-info">
                Monitor SAMSUNG Gamer 32" pulgadas G55TQ Negro
              </div>
              <div class="product-info">Samsung</div>
              <div class="product-info">
                <img src={tiempoEntrega} alt="" />
              </div>
              <div class="product-info">$1,661,000</div>
              <div class="product-info">
                <a href="#" onClick="">
                  <img src={button} alt="" />
                </a>
              </div>
              <div class="product-info">$16,610,000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProducts;
