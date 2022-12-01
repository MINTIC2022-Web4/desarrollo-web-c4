const router = require('express').Router()
const tokenAuth  = require('../jwt')

const {ventas, save} = require('../controllers/ventas-controller')

//ventas
router.get('/', ventas)

router.post('/', save)

module.exports=router