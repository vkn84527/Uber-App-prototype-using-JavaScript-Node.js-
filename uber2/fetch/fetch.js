var con = require('../db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.get('/customer-data-fetch',(req,res)=>{
    connection.query('select * from customer',(err,array,feilds)=>{
        res.send(array);
    });
});

router.get('/driver-data-fetch',(req,res)=>{
    connection.query('select * from driver',(err,array,feilds)=>{
        res.send(array);
    });
});

router.get('/booking-data-fetch',(req,res)=>{
    connection.query('select * from booking',(err,array,feilds)=>{
        res.send(array);
    });
});

router.get('/booking-driver-data',(req,res)=>{
    //select driver.d_name  from driver join booking on driver.d_id=booking.d_id 
    //where booking.b_id=(select b_id  from booking limit 1);
    connection.query('select *  from driver join booking on driver.d_id=booking.d_id',(err,array,feilds)=>{
        res.send(array);
    });
});


module.exports = router;