

const mongoose = require("mongoose");
const sequencing = require("../config/sequence");

const productSchema = new mongoose.Schema({
    _id: Number,
    imagen: {
        type: String
    },
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    cantidad: {
        type: Number
    },
    marca: {
        type: String
    },
    descripcion: {
        type: String
    }
})

//autoIncrement.plugin(autoIncrement);
productSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("product_id").
        then(counter => {
            console.log("asdasd", counter);
            if (!counter) {
                sequencing.insertCounter("product_id")
                    .then(counter => {
                        doc._id = counter;
                        console.log(doc)
                        next();
                    })
                    .catch(error => next(error))
            } else {
                doc._id = counter;
                next();
            }
        })
        .catch(error => next(error))
});

module.exports = mongoose.model('products', productSchema);

