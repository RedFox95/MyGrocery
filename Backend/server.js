require('dotenv').config()

const express = require('express')
const router = require('./routes/pantry')

const pantryRoutes = require('./routes/pantry')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes 

app.use('/api/pantry/', pantryRoutes)

router.post('/', (req, res) => {
    res.json({mssg: 'POST a new pantry item'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a pantry item'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a pantry item'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port',process.env.PORT)
})

process.env