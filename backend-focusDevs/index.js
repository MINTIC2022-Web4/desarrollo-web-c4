const express = require('express')
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const app = express()
var cors = require('cors')
const port = 3001
bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken')
require('dotenv').config();
const routeProduct = require('./config/product');
const routelogin = require('./config/login');
const db = require("./config/keys").mongoURI;
const fileUpload = require('express-fileupload');
const _ = require('lodash');
const { response } = require('express');


app.use(fileUpload({
    createParentPath: true
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.set('port', process.env.PORT || port)

//middlewares

app.use(express.json());
app.use('/productos', require('./routes/ruta-productos'));

app.use("/ventas", require('./routes/ruta-ventas'));

app.use("/login", require('./routes/ruta-login'));

// middlewares
app.use(express.json());
app.use('/api', routeProduct)

app.use('/api', routelogin)

//conecion a la base de Datos mongodb Atlas
mongoose
    .connect(db,
        { useNewUrlParser: true })
    .then(() => console.log('connect to MongoDb Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log(`App esta en el puerto ${port}!`));


