const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    password:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    }
})

//model
const User = mongoose.model('User', userSchema)

//export
module.exports = User