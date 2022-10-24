import React, { useState, useEffect } from "react";
import "./customerProductCards.css";
import Products from "./Products";
import Pagination from "../pagination/pagination";
import icon from "../../assets/customerProductsCard/Vector.svg";

const CustomerProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const img = "/src/assets/customerProductsCard/pc1.png";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      //const res = await axios.get('cosumir api');
      const InfoProducts = [
        {
          icon: icon,
          image: img,
          description: "Monitor SAMSUNG Gamer 32 pulgadas G55TQ Negro",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba1",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba2",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba3",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
        {
          icon: icon,
          image: img,
          description: "prueba4",
          textmarca: "Marca",
          marca: "Samsung",
          precio: "$1,661.000",
          textPrecio: "con IVA",
        },
      ];
      //setPosts(res.data);
      setProducts(InfoProducts);
      setLoading(false);
    };

    fetchProducts();
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
    /*<>
      <div class="product-row">
        {InfoProducts.map((info, index) => (
          <div class="product-container">
            <a href="#" class="item1">
              <img src={info.icon} alt="" />
            </a>
            <div class="item2">
              <img src={info.image} alt="" />
            </div>
            <div class="item3">{info.description}</div>
            <div class="item4">{info.textmarca}</div>
            <div class="item5">{info.marca}</div>
            <div class="item6">{info.precio}</div>
            <div class="item7">{info.textPrecio}</div>
          </div>
        ))}
      </div>
    </>*/
    <>
      <div className="products-container">
        <div className="row-breadcrumb">
            <span>Home</span><span>{">"}</span><span>Productos</span>
        </div>

        <div className="row-cards">
          <Products products={currentProducts} loading={loading} />
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
