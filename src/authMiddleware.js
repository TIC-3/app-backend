

module.exports.isAlumno = (req, res, next) => {
    if(req.isAuthenticated() && req.user.tipo == 'a'){
        next();
    }
    else{
        res.status(401).json({msg: 'No autorizado'})
    }

    //req.username = req.user.username //podria hacer esto para despues devolver las cosas dentro de cada usuario
}

module.exports.isProfesor = (req, res, next) => {
    if(req.isAuthenticated() && req.user.tipo == 'p'){
        next();
    }
    else{
        res.status(401).json({msg: 'No autorizado'})
    }
}


//Hay que adaptar esto