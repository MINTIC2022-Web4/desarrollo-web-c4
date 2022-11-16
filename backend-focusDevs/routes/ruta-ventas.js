const router = require('express').Router()
const tokenAuth  = require('../jwt')

const {ventas} = require('../controllers/ventas-controller')

//ventas
router.get('/',tokenAuth.rutasProtegidas, ventas)

module.exports=router