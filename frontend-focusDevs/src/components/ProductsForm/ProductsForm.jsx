import { useState } from "react";
import React from "react";
import "./productsForm.css";
import Select from "react-select";

const productsForm = (props) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("categoria1");
  const [descripcion, setDescripcion] = useState("");

  const options = [
    { value: "categoria1", label: "categoria1" },
    { value: "categoria2", label: "categoria2" },
    { value: "categoria3", label: "categoria3" },
  ];

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCategoria = (event) => {
    setCategoria(event.target.value);
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
        <div className="formContainer">
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Imagen </div>
            <div class="div3"> c</div>
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
            <div class="col3"> </div>
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
            <div class="col3"> </div>
          </div>
          <div className="row">
            <div class="requerido">*</div>
            <div class="col2">Precio</div>
            <div class="col3"> </div>
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
