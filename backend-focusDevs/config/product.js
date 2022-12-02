const express = require("express")
const router = express.Router()
const productSchema = require('../models/product');


router.post('/product',(req, res) =>{
    const producto = productSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//get all producto

router.get('/product',(req, res) =>{
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//get a producto
router.get('/product/:id',(req, res) =>{
    const {id} = req.params;
    productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//update a producto

router.put('/product/:id',(req, res) =>{
    const {id} = req.params;
    const { imagen,nombre,precio,cantidad,marca,categoria,fechaVenta} = req.body;
    productSchema
    .updateOne({ _id : id}, {$set:{imagen,nombre,precio,cantidad,marca,categoria,fechaVenta}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

// delete to producto
router.delete('/product/:id',(req, res) =>{
    const {id} = req.params;
    productSchema
    .remove({ _id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;