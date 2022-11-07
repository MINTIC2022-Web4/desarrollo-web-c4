const router = require('express').Router()

const {ventas} = require('../controllers/ventas-controller')

//ventas
router.get('/', ventas)

module.exports=router