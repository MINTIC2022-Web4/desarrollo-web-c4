import React, { useState, useEffect, useContext } from "react";
import "./productsForm.css";
import Select from "react-select";
import { Link } from "wouter";
import { UserContext } from "../../context/UserContext";
import FileUploader from "./FileUploader";
import axios from "axios";

const productsForm = (props) => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("categoria1");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  //const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const { jwt } = useContext(UserContext);

  const options = [
    { value: "1", label: "Monitor" },
    { value: "2", label: "Teclado" },
    { value: "3", label: "Diadlema" },
  ];

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
  };

  const handleCategoria = (event) => {
    setCategoria(event.label);
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

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  let producto = {
    nombre: nombre,
    marca: marca,
    categoria: categoria,
    stock: stock,
    precio: precio,
    descripcion: descripcion,
  };

  const handleFormSubit = async (event) => {
    event.preventDefault();

    var formdata = new FormData();

    formdata.append("nombre", nombre);
    formdata.append("marca", marca);
    formdata.append("categoria", categoria);
    formdata.append("stock", stock);
    formdata.append("precio", precio);
    formdata.append("descripcion", descripcion);
    formdata.append("recfile", selectedFile);

    var myHeaders = new Headers();
    myHeaders.append("access-token", jwt);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:3001/productos", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="products-container">
        <div>
          <div className="row-breadcrumb">
            <span>Home</span>
            <span>{">"}</span>
            <span>Productos</span>
            <span>{">"}</span>
            <span>Agregar</span>
          </div>
          <div className="row-breadcrumb">
            <Link to="/adm-product-list">
              <div className="col3">{"<- "}Agregar productos</div>
            </Link>
          </div>
          <br />
          <br />
          <hr className="row-hr"></hr>
          <div className="row-forms">
            <form onSubmit={handleFormSubit}>
              <div className="agregar"></div>
              <div className="ir"> </div>
              <div className="formContainer">
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Imagen</div>
                  <div className="col3">
                    {<FileUploader
                      onFileSelectSuccess={(file) => setSelectedFile(file)}
                      onFileSelectError={({ error }) => alert(error)}
                    />}
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Nombre</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="text"
                      value={nombre}
                      required
                      onChange={handleNombreChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Marca</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="text"
                      value={marca}
                      required
                      onChange={handleMarcaChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Categoria</div>
                  <div className="col3">
                    <Select
                      className=""
                      classNamePrefix=""
                      name="color"
                      options={options}
                      onChange={handleCategoria}
                      placeholder="Seleccione una categoria"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Cantidad</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="number"
                      value={stock}
                      onChange={handleStockChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Precio</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="number"
                      value={precio}
                      required
                      onChange={handlePrecioChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Descripción</div>
                  <div className="col3">
                    <textarea
                      className="from-input"
                      value={descripcion}
                      onChange={handleDescripcionChange}
                    />
                  </div>
                </div>
                <div className="buttonForm">
                  <input
                    className="textButton"
                    type="submit"
                    value="Guardar Cambios"
                  />
                </div>
              </div>
            </form>
          </div>

          {/*<nav class="menu">
            <ul>
              <li>Home</li>
              <li>Productos</li>
              <li>Agregar</li>
            </ul>
          </nav>*/}
        </div>
      </div>
    </>
  );
};
export default productsForm;
