const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username:{
       type:String
    },
    password:{
        type:Number
    },
    roles:[

    ],
    rights:[
    ]

})

module.exports=mongoose.model('User',loginSchema);