const toJson = require('../utils/tools')
const productos = new Map()

let fs = require('fs')

module.exports = {
    findAll: (req, res) => {

        var arrayOfObjects = []
        /*Código para enviar productos del archivo data.json productoss JSON*/
        fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            return res.status(200).json({ state: true, data: arrayOfObjects })
        })
    },
    findById: (req, res) => {
        let { id } = req.params
        id = parseInt(id)
        fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            var data_filter = arrayOfObjects.filter(element => element.id == id)[0]

            return res.status(200).json({ state: true, data: data_filter })
        })
        //return res.status(200).json({ state: true, data: productos.get(id) })
    },
    save: (req, res) => {
        const producto = req.body
        let { id } = req.body
        id = parseInt(id)

        if (!productos.has(id)) {
            productos.set(id, producto)
            return res.status(200).json({ state: true, data: productos.get(id) })
        } else {
            return res.status(200).json({ state: false })
        }
    },
    update: (req, res) => {
        const producto = req.body
        let { id } = req.body
        id = parseInt(id)

        if (productos.has(id)) {
            productos.set(id, producto)
            return res.status(200).json({ state: true, data: productos.get(id) })
        } else {
            return res.status(200).json({ state: false })
        }
    },
    erase: (req, res) => {
        const { id } = req.params

        if (productos.has(parseInt(id))) {
            const producto = productos.get(parseInt(id))
            productos.delete(parseInt(id))
            return res.status(200).json({ state: true, data: producto })
        } else {
            return res.status(200).json({ state: false })
        }
    }
}