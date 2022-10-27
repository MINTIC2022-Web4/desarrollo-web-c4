import React, { useState, useEffect } from "react";
import "./productlist.css";
import ProductsTable from "./ProductsTable";
import InfoProducts from "../../../services/products.json";
import Pagination from "../../pagination/pagination";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      //const res = await axios.get('cosumir api');
      //setPosts(res.data);
      setProducts(InfoProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="products-list-container">
        <div className="row-breadcrumb">
          <span>Home</span>
          <span>{">"}</span>
          <span>Lista de productos</span>
        </div>
        <div className="row-tittle">
          {" "}
          Todos los productos ({`${products.length} Productos`})
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
          <ProductsTable products={currentProducts} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default ProductsList;
