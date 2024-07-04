const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    marca:{
        type:String,
        required:true,
    },
    modelo:{
        type:String,
        required:true,
    },
    cor:{
        type:String,
        required:true
    },
    ano:{
        type:Number,
        required:true,
    },
    valor:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    negociacao:{
        type:String,
        required:true
    },
    vendido:{
        type:String,
        required:true
    }
});

const CarModel = new mongoose.model('Car', carSchema);

module.exports = CarModel;