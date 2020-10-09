const router = require('express').Router();

router.post('/profesor', async (req, res) => {

    try{
        
    }catch(err){
        res.status(500).json({message: err.message})
    }

})


module.exports = router;