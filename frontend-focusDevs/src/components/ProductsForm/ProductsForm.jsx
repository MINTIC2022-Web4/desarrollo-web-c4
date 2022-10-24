import { useState } from "react";
import React from "react";
import "./productsForm.css";
import Select from "react-select";

const productsForm = (props) => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("categoria1");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const options = [
    { value: "categoria1", label: "categoria1" },
    { value: "categoria2", label: "categoria2" },
    { value: "categoria3", label: "categoria3" },
  ];

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  const handleCategoria = (event) => {
    setCategoria(event.target.value);
  };
  const handleStockChange = (event) => {
    setStock(event.target.value);
  };
  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };
  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFormSubit = (event) => {
    event.preventDefault();
    alert(`nombre: ${nombre}`);
  };

  return (
    <>
      <form onSubmit={handleFormSubit}>
        <div>
          <nav class="menu">
            <ul>
              <li>Home</li>
              <li>Productos</li>
              <li>Agregar</li>
            </ul>
          </nav>
        </div>
        <div className="agregar">
          <div class="col3">Agregar productos</div>
        </div>
        <div className="ir"> </div>
        <div className="formContainer">
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Imagen </div>
            <div class="div3"></div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Nombre</div>
            <div class="col3">
              <input
                className="from-input"
                type="text"
                value={nombre}
                onChange={handleNombreChange}
              />
            </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Marca</div>
            <div class="col3">
              <input
                className="from-input"
                type="text"
                value={marca}
                onChange={handleMarcaChange}
              />
            </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Categoria</div>
            <div class="col3">
              <Select
                options={options}
                onChange={handleCategoria}
                placeholder="Seleccione una categoria"
              />
            </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Stock</div>
            <div class="col3">
              <input
                className="from-input"
                type="text"
                value={stock}
                onChange={handleStockChange}
              />
            </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Precio</div>
            <div class="col3">
              <input
                className="from-input"
                type="text"
                value={precio}
                onChange={handlePrecioChange}
              />
            </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Descripción</div>
            <div class="col3">
              <textarea className="from-input" value={descripcion} onChange={handleDescripcionChange} />
            </div>
          </div>
          <div className="buttonForm row">
            <input
              className="textButton"
              type="submit"
              value="Guardar Cambios"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default productsForm;
