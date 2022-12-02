const express = require("express");
const router = express.Router()
const loginSchema = require('../models/login');


router.post('/login',(req, res) =>{
    const user = loginSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});
//get all ususarios

router.get('/login',(req, res) =>{
    loginSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

module.exports = router;