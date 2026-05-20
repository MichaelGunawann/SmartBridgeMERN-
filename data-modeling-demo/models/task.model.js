const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : { 
        type : String, 
        required : [true , 'Title is required'],
    }, 

    description : { 
        type : String ,
    }, 

    completed : { 
        type : Boolean,
        default : false
    },

    userId : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true , 'User ID is required']
    }

}, {timeStamps : true});

module.exports = mongoose.model('Task', taskSchema);