const router = require('express').Router();
const passport = require('passport');
const generatePassword = require('../lib/passwordUtils').generatePassword;
const validPassword = require('../lib/passwordUtils').validPassword;

router.post('/', passport.authenticate('local', {failureRedirect: '/login-failure', successRedirect: '/login/login-success'}));

router.post('/profesor', async (req, res) => {

    try{
        
    }catch(err){
        res.status(500).json({message: err.message})
    }

})

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

router.get('/login-success', (req, res, next) => {
    res.json({ login: true});
});

//login failure
router.get('/login-failure', (req, res, next) => {
    res.json({ login: false});
});



module.exports = router;