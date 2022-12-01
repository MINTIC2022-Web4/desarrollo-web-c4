
const mongoose = require("mongoose");
const sequencing = require("../config/sequence");


const ventasSchema = new mongoose.Schema({
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
    },
    ventafecha:{
        type: Date
    }
})

//autoIncrement.plugin(autoIncrement);
ventasSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("venta_id").
        then(counter => {
            if (!counter) {
                sequencing.insertCounter("venta_id")
                    .then(counter => {
                        doc._id = counter;
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

module.exports = mongoose.model('ventas', ventasSchema);

