var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/delete-customer-data",(req,res)=>{
    var c_name = req.body.c_name;
    var c_id = req.body.c_id;
    var c_phone = req.body.c_phone
    var c_mail = req.body.c_mail;
    connection.query("delete from customer where c_id="+c_id,
                        (err,result)=>{
        if(err){
            res.send({"delete":"fail"});
        }else{
            console.log("Customer_Data_Delete successfully.....!!")
            res.send({"delete":"success"});
        }
    });
});

router.post("/delete-driver-data",(req,res)=>{
    var d_name = req.body.d_name;
    var d_id = req.body.d_id;
    var d_phone = req.body.d_phone
    var d_license = req.body.d_license;
    connection.query("delete from driver where d_id="+d_id,
                        (err,result)=>{
        if(err){
            res.send({"delete":"fail"});
        }else{
            console.log("Driver_Data_Delete successfully.....!!")
            res.send({"delete":"success"});
        }
    });
});

module.exports = router