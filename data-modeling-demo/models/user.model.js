const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : { 
        type : String,  
        trim : true
    }, 

    email : { 
        type : String,
        required : [true , 'EMail is required'],
        unique : true,
        lowercase : true
    }, 

    createdAt : { 
        type : Date, 
        default : Date.now
    }
});

module.exports = mongoose.model('User', userSchema);