const express = require('express')

const router = express.Router()

//GET all pantry items
router.get('/', (req, res) => {
    res.json({mssg: 'GET all pantry items'})
})

//GET a single pantry item
router.get('/:id', (req, res) => {
    res.json({mssg: "GET single pantry item"})
})

//Post a single pantry item
router.post('/', (req, res) => {
    res.json({mssg: "POST pantry item"})
})

//GET a single pantry item
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a pantry item"})
})

//GET a single pantry item
router.patch('/:id', (req, res) => {
    res.json({mssg: "PATCH a single pantry item"})
})

module.exports = router