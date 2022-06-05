const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: Array
    },
    type: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    priceOld: {
        type: Number
    },
    priceCurrent: {
        type: Number,
        required: true
    },
    disCount: {
        type: String
    },
    sold: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    },
    forGender: {
        type: String
    }
},
    {

        timestamps: true
    }
)


module.exports = mongoose.model('Product', productSchema)