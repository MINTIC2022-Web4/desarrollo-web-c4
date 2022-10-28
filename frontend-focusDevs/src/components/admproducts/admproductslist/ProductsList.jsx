import React, { useState, useEffect } from "react";
import "./productlist.css";
import ProductsTable from "./ProductsTable";
import InfoProducts from "../../../services/products.json";

function ProductsList() {

  const tabla = true
  return (
    <>
      <div className="products-list-container">
        <div className="row-breadcrumb">
          <span>{`Home  >   Lista de productos`} </span>

        </div>
        <div className="row-tittle">
          {" "}
          Todos los productos ({`${InfoProducts.length} Productos`})
        </div>
        <div className="row-button">
          <span>
            <a
              href="#"
              className=""
              onClick={""}
            >
              <img src={"src/assets/AdmListProducts/add-list.svg"} alt="" />
            </a>
          </span>
          <span>Agregar nuevo producto</span>
        </div>
        <div className="row-products-elements">
          <ProductsTable 
          paginate = {tabla}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsList;
