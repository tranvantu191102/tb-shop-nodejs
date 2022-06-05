const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const dotenv = require('dotenv');
const Route = require('./routes')

const app = express()
const PORT = process.env.PORT || 8000

dotenv.config()

db.connect()

app.use(cors())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


Route(app)

app.listen(PORT, () => {
    console.log(`Backend is running.... (PORT = ${PORT})`)
})





