const mongoose =require('mongoose')

//schrma
const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String,
        required: true,
        unique: true,
        minLength:3,
        maxLength: 20
    }
})

//model
const Category = mongoose.model('Category', categorySchema)

//export
module.exports = Category