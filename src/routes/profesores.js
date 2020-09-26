const express = require('express')
const router = express.Router()
const Profesor = require('../models/profesor')


router.get('/', async (req, res)=> {
    try{
        res.send("De aca salen cosas")
    }catch{
        res.status(500).json({message: err.message})
    }
})

module.exports = router