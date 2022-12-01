const toJson = require('../utils/tools')
const productos = new Map()
let fs = require('fs')
const productSchema = require('../models/product');
const { db } = require('../models/product');
const { default: mongoose } = require('mongoose');

module.exports = {
    findAll: (req, res) => {

        //var arrayOfObjects = []
        /*Código para enviar productos del archivo data.json productoss JSON*/
        /*fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            return res.status(200).json({ state: true, data: arrayOfObjects })
        })*/
        productSchema
            .find()
            .then((data) => res.status(200).json({ state: true, data: data }))
            .catch((error) => res.json({ message: error }));
    },
    findById: (req, res) => {
        /*let { id } = req.params
        id = parseInt(id)
        fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            var data_filter = arrayOfObjects.filter(element => element.id == id)[0]

            return res.status(200).json({ state: true, data: data_filter })
        })*/
        let { id } = req.params;
        productSchema
            .findById(id)
            .then((data) => res.status(200).json({ state: true, data }))
            .catch((error) => res.json({ message: error }));
    },
    save: (async (req, res) => {
        let file
        let { id, nombre, precio, cantidad, marca, descripcion } = req.body
        try {
            if (!req.files) {
                res.status(200).send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                file = req.files.recfile;
                file.mv('../frontend-focusDevs/src/assets/imgs/' + file.name);
                jsonProductos = {
                    "imagen": `/src/assets/imgs/${file.name}`,
                    "nombre": nombre,
                    "precio": precio,
                    "cantidad": cantidad,
                    "marca": marca,
                    "descripcion": descripcion
                }

                const producto = productSchema(jsonProductos);
                producto
                    .save()
                    .then((data) => res.json(data))
                    .catch((error) => res.json({ message: error }));


            }
        } catch (err) {
            res.status(500).send(err);
        }
        //return res.status(200).json({ state: true, data: productos.get(id), path: "c:/" + file.name })
        /*} else {
            return res.status(200).json({ state: false })
        }*/
    })
    ,
    update: (req, res) => {
        /*const producto = req.body
        let { id } = req.body
        id = parseInt(id)

        if (productos.has(id)) {
            productos.set(id, producto)
            return res.status(200).json({ state: true, data: productos.get(id) })
        } else {
            return res.status(200).json({ state: false })
        }*/

        let file
        let imagen
        const { id } = req.params;
        const { nombre, precio, cantidad, marca, descipcion } = req.body;

        try {
            if (!req.files) {
                res.status(200).send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                file = req.files.recfile;
                file.mv('../frontend-focusDevs/src/assets/imgs/' + file.name);

                console.log("guardo");
                imagen = `/src/assets/imgs/${file.name}`
                productSchema
                    .updateOne({ _id: id }, { $set: { imagen, nombre, precio, cantidad, marca, descipcion } })
                    .then((data) => res.json(data))
                    .catch((error) => res.json({ message: error }));
            }
        } catch (err) {
            res.status(500).send(err);
        }


    },
    erase: (req, res) => {
        /*const { id } = req.params

        if (productos.has(parseInt(id))) {
            const producto = productos.get(parseInt(id))
            productos.delete(parseInt(id))
            return res.status(200).json({ state: true, data: producto })
        } else {
            return res.status(200).json({ state: false })
        }
        */
        const { id } = req.params;
        productSchema
            .remove({ _id: id })
            .then((data) => res.json({ state: true, data }))
            .catch((error) => res.json({ state: false, message: error }));
    }
}

