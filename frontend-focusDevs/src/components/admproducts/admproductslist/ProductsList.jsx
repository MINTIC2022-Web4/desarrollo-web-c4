import React, { useState, useEffect } from "react";
import "./productlist.css";
import ProductsTable from "./ProductsTable";
import { Link } from "wouter";

function ProductsList() {
  const tabla = true;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="products-list-container">
        <div className="row-breadcrumb">
          <span>{`Home  >   Lista de productos`} </span>
        </div>
        <div className="row-tittle">
          {" "}
          Todos los productos ({`${products.length} Productos`})
        </div>
        <div className="row-button">
          <span>
            <Link to="/from-product">
              <img
                src={"src/assets/AdmListProducts/add-list.svg"}
                onClick={""}
                alt=""
              />
            </Link>
          </span>

          <span>Agregar nuevo producto</span>
        </div>
        <div className="row-products-elements">
          <ProductsTable tipoTabla={tabla} listProducts={products} />
        </div>
      </div>
    </>
  );
}

export default ProductsList;
