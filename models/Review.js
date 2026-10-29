const mongoose = require('mongoose')

//schema
const reviewSchema = new mongoose.Schema({
    reviewTitle: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    reviewBody: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Listing:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true,
    }
})

//model
const Review = mongoose.model('Review', reviewSchema)

//export
module.exports = Review