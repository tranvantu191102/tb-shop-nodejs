
const usersRouter = require('./users')
const productRouter = require('./products')

const Route = (app) => {
    app.use('/api', usersRouter)
    app.use('/api/product', productRouter)
}

module.exports = Route