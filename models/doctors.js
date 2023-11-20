const mongoose = require('mongoose');

const doctor = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:200
    },
    patients:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
    }
});

module.exports = mongoose.model("Doctors",doctor);