require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session')
const bodyparser = require("body-parser");

//const MongoStore = require('connect-mongo')(session);

//var cors = require('cors')
//app.use(cors())

app.set('port', process.env.PORT || 3000);

const login = require('./src/routes/login');
const register = require('./src/routes/register');
const profesores = require('./src/routes/profesores');
const alumnos = require('./src/routes/alumnos');

//conectar a bdd
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log('DB connected'))//tira este mensaje si se conecto
    .catch(err => console.log(err))//tira esto si no conecto


//Json middleware para que reconozca las entradas como json
app.use(express.json());

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


app.use('/login', login);
app.use('/register', register)
app.use('/profesores', profesores);
app.use('/alumnos', alumnos);

app.listen(app.get('port'), () => console.log(`Server started at port ${app.get('port')}`))

