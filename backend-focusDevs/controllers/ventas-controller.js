module.exports = {
    ventas: (req, res) => {
        let fs = require('fs')
        var arrayOfObjects = []
        /*Código para enviar productos del archivo data.json productoss JSON*/
        fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            return res.status(200).json({ state: true, data: arrayOfObjects })
        })
    }
}