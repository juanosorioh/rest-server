const{model, Schema} = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        min: 6
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    activo:{
        type: Boolean,
        default : true
    },

})