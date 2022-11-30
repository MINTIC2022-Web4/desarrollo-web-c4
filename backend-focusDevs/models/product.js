const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imagen:{
       type:String
    },
    nombre:{
        type:String
    },
    precio:{
      type: Number
    },
    cantidad:{
        type: Number
    },
    marca:{
         type:String
    },
    categoria:{
        type:String
    },
    fechaVenta:{
    }
    
    
})

module.exports=mongoose.model('products',productSchema);