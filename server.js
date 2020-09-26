const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000);

var cors = require('cors')
app.use(cors())

//conectar a bdd
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log('DB connected'))//tira este mensaje si se conecto
    .catch(err => console.log(err))//tira esto si no conecto