const router = require('express').Router()
const tokenAuth  = require('../jwt')

const {findAll, findById, save, update, erase} = require('../controllers/productos-controller')

router.get('/', findAll)

router.get('/:id', findById)

router.post('/', tokenAuth.rutasProtegidas, save)

router.put('/:id', tokenAuth.rutasProtegidas, update)

router.delete('/:id', tokenAuth.rutasProtegidas, erase)

module.exports=router