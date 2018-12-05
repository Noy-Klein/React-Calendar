const express = require('express');
const router = express.Router();
const calendar = require('node-calendar');

router.get('/getdays/:year/:month', (req,res)=>{
    let year = req.params.year;
    let month = req.params.month;
    let days = calendar.monthrange(year, month)
    if(!days){
        res.send('error');
    }
    else{
        res.send(days)  
    }
})

module.exports = router;