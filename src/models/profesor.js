const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfesorSchema = new Schema({

    username: { 
        type: String,
        unique : true,
        index: true,
        required: true
     },
     nombre: {
         type: String,
         required: true,
         default: "Sin nombre"
     },
     fecha_nacimiento: Date,
     nro_contacto: String,
     mail: String,
     hash: String,
     salt: String

})


module.exports = mongoose.model('profesores',ProfesorSchema)