const express = require('express')
const app = express()
bodyParser = require('body-parser')


//settings
const config = "miclaveultrasecreta123*"

const rutasProtegidas = require('express').Router()

module.exports = {
    config,
    rutasProtegidas
}


rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, config, (err, decoded) => {
            if (err) {
                return res.status(401).json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({
            mensaje: 'Token no proveída.'
        });
    }
});



