const ventastSchema = require('../models/ventas');

module.exports = {
    ventas: (req, res) => {
        /*let fs = require('fs')
        var arrayOfObjects = []
        fs.readFile('products.json', 'utf-8', function (err, data) {
            if (err) throw err
            arrayOfObjects = JSON.parse(data)
            return res.status(200).json({ state: true, data: arrayOfObjects })
        })*/
        ventastSchema
        .find()
        .then((data) => res.status(200).json({ state: true, data: data }))
        .catch((error) => res.json({ message: error }));
    },
    save: (req, res) => {
        console.log("rquest",req.body)
        //console.log(req.body)
        req.body.forEach(element => {
            const producto = ventastSchema(element);
                producto
                    .save()
                    .then((data) => {console.log(data)})
                    .catch((error) => res.json({ message: error }));
        })
        return res.json({state: true});
    }
}