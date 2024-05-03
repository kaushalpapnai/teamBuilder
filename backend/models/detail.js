const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 

    image:String,

    introduction:String,

    course:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum: ['Student', 'Professional'], // This restricts the field to only two values
        required:true
    },

    branch:{
        type:String,
        required:true,
    },

    skills:{
        type:String,
        required:true,
    },

    technology:String,

    projects:String,

    college:{
        type:String,
        required:true,
    },    
    city:{
        type:String,
        required:true,
    },    
    state:{
        type:String,
        required:true,
    },    
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;