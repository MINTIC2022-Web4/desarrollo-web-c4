import React, { useState, useEffect } from "react";
import "./productlist.css";
import ProductsTable from "./ProductsTable";
import InfoProducts from "../../../services/products.json";
import { Link } from "wouter";
import axios from "axios";

function ProductsList() {
  const tabla = true;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/pruebas");
      setProducts(res.data.data);
      setLoading(false);
    };

    fetchProducts();
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
          <ProductsTable paginate={tabla} />
        </div>
      </div>
    </>
  );
}

export default ProductsList;
