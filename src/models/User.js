const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 30,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    nameDisplay: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String
    },
    address: { type: String },
    gender: { type: String },
    phoneNumber: { type: String },
    cart: [
        {
            id: { type: String },
            quantity: { type: Number },
            size: { type: String },
            priceCurrent: { type: String },
            name: { type: String },
            image1: { type: String }
        }
    ],
    birthday: { type: Date }
},
    {
        timestamps: true
    })


module.exports = mongoose.model('User', userSchema)