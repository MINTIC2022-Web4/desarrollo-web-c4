import { useState } from "react";
import React from "react";
import "./productsForm.css";
import Select from "react-select";
import { Link } from "wouter";
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

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("marca", marca);
    formData.append("categoria", categoria);
    formData.append("stock", stock);
    formData.append("precio", precio);
    formData.append("descripcion", descripcion);
    formData.append("files", selectedFile);

    console.log("formdata: ", ...formData);

    /*axios({
      method: "post",
      url: "http://localhost:3001/productos",
      data: formData,
      headers: {
        "access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY4NzMxOTc3LCJleHAiOjE2Njg3MzY5Nzd9.mbk1LbATVIKjSzBhN9LrhdgzFJlBrRoOTgX877gMByw",
        "Content-Type": "multipart/form-data"
      },
    })
      .then((res) => {
        console.log("salida", res);
      })
      .catch((err) => alert("File Upload Error"));
*/

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/productos",
        data: formData,
        headers: {
          "access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjY4Nzc4MjYzLCJleHAiOjE2Njg3ODMyNjN9.MzT9TZLOvQcKsKheRctodQ-kv63C72OBAtezzCfxlvI",
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log("salida", res);
      });
    } catch (error) {
      console.log(error);
    }
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
                    {/*<FileUploader
                      onFileSelectSuccess={(file) => setSelectedFile(file)}
                      onFileSelectError={({ error }) => alert(error)}
  />*/}
                    <input type="file" name="recfile" id="archivo" onChange={handleFileSelect} />

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
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Cantidad</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="text"
                      value={stock}
                      onChange={handleStockChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="requerido">*</div>
                  <div className="col2">Precio</div>
                  <div className="col3">
                    <input
                      className="from-input"
                      type="text"
                      value={precio}
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
