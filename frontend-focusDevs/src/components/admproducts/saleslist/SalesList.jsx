import React, { createContext } from "react";
import "./saleslist.css";
import ProductsTable from "../admproductslist/ProductsTable";
import InfoProducts from "../../../services/products.json";

export default function ProductSalesList() {
  let total = 0;
  InfoProducts.forEach(function (a) {
    total += a.precio;
  });
  total = Math.round(total * 100.0) / 100.0;
  const prueba = false;

  return (
    <>
      <div className="products-list-container">
        <div className="row-breadcrumb">
          <span>{`Home  >  Lista de ventas`} </span>
        </div>
        <div className="row-tittle">
          {" "}
          Todos las ventas({`${InfoProducts.length} Productos`})
        </div>

        <div className="row-products-elements">
          <ProductsTable paginate={prueba} />
        </div>
        <div className="row-total">
          <div className="total">Total Ventas: {`$${total}`}</div>
        </div>
      </div>
    </>
  );
}
