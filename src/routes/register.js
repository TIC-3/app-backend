const router = require('express').Router();
const Profesor = require('../models/profesor')
const Alumno = require('../models/alumno');
const bycript = require('bcrypt');
const profesor = require('../models/profesor');

router.post('/alumno', async (req, res) => {
    try {
        
        const saltHash = generatePassword(req.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;

        alumno = new Alumno({
           username: req.body.username,
           nombre: req.body.name,
           mail: req.body.mail,
           fecha_nacimiento: req.body.fecha_nacimiento,
           hash: hash,
           salt: salt
       })
       
    } catch (error) {
        res.send(error)
    }
})

router.post('/profesor', async (req, res) => {
    try {
        
        const saltHash = generatePassword(req.body.password);
        const salt = saltHash.salt;
        const hash = saltHash.hash;

        profesor = new Profesor({
           username: req.body.username,
           nombre: req.body.name,
           mail: req.body.mail,
           fecha_nacimiento: req.body.fecha_nacimiento,
           hash: hash,
           salt: salt
       })
       
    } catch (error) {
        res.send(error)
    }
})



module.exports = router;