const router = require('express').Router();
const Profesor = require('../models/profesor')
const Alumno = require('../models/alumno');
const alumno = require('../models/alumno');
const bycript = require('bycript')

router.post('/alumno', async (req, res) => {
    try {
       
        const hashedPassword = await bycript.hash(req.body.password, 10)

        alumno = new Alumno({
           username = req.body.username,
           nombre = req.body.name,
           mail = req.body.mail,
           fecha_nacimiento = req.body.fecha_nacimiento
       })
    } catch (error) {
        
    }
})

router.post('/profesor', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})



module.exports = router;