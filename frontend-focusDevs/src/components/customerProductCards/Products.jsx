import React from "react";

const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div class="product-row">
        {products.map(info => (
          <div className = "product-container">
            <a href="#" class="item1">
              <img src={info.icon} alt="" />
            </a>
            <div class="item2">
              <img src={info.image} alt="" />
            </div>
            <div className="item3">{info.description}</div>
            <div className="item4">{info.textmarca}</div>
            <div className="item5">{info.marca}</div>
            <div className="item6">{info.precio}</div>
            <div className="item7">{info.textPrecio}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
