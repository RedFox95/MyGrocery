require('dotenv').config()

const express = require('express')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handler for get to root directory
// middleware example
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the MyGrocery home page'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port',process.env.PORT)
})

process.env