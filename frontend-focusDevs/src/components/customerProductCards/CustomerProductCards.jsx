import React, { useState, useEffect } from "react";
import "./customerProductCards.css";
import Products from "./Products";
import Pagination from "../pagination/pagination";
import InfoProducts from "../../services/products.json";

import axios from "axios";

const CustomerProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const img = "/src/assets/customerProductsCard/pc1.png";

  /*useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/pruebas');
      setProducts(res.data.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:3001/pruebas")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="products-container">
        <div className="row-breadcrumb">
          <span>{`Home > Productos`}</span>
        </div>
        <div className="row-cards">
          <Products productsInfo={currentProducts} loading={loading} />
        </div>
        <div className="row-pagination">
          <Pagination
            elementsPerPage={productsPerPage}
            totalElements={products.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerProductCards;
