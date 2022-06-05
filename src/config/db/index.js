const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGOOSE)
        console.log('Connect successful!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}
module.exports = { connect }
