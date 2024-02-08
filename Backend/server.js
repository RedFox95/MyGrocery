const express = require('express')

// express app
const app = express()

// route handler
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the MyGrocery home page'})
})

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000!')
})