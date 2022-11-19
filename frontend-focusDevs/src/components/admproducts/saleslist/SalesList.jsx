import "./saleslist.css";
import ProductsTable from "../admproductslist/ProductsTable";
import InfoProducts from "../../../services/products.json";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";


export default function ProductSalesList() {
  const tabla = false;
  const [products, setProducts] = useState([]);
  const { jwt } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:3001/ventas", {
      method: "GET",
      headers: {
        "access-token":
          jwt,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let total = 0;
  products.forEach(function (a) {
    total += a.precio;
  });
  total = Math.round(total * 100.0) / 100.0;

  return (
    <>
      <div className="products-list-container">
        <div className="row-breadcrumb">
          <span>{`Home  >  Lista de ventas`} </span>
        </div>
        <div className="row-tittle">
          {" "}
          Todos las ventas({`${products.length} Productos`})
        </div>

        <div className="row-products-elements">
          <ProductsTable tipoTabla={tabla} listProducts={products} />
        </div>
        <div className="row-total">
          <div className="total">Total Ventas: {`$${total}`}</div>
        </div>
      </div>
    </>
  );
}
