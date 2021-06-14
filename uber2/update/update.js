var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/update-customer-data",(req,res)=>{
    var c_name = req.body.c_name;
    var c_id = req.body.c_id;
    var c_phone = req.body.c_phone
    var c_mail = req.body.c_mail;
    connection.query("update customer set c_name='"+c_name+"',c_mail='"+c_mail+"',c_phone="+c_phone+" where c_id="+c_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"});
            console.log(err)
        }else{
            console.log("Customer_Details is updated...!!")
            res.send({"update":"success"});
        }
    });
});

router.post("/update-driver-data",(req,res)=>{
    var d_name = req.body.d_name;
    var d_id = req.body.d_id;
    var d_phone = req.body.d_phone
    var d_license = req.body.d_license;
    connection.query("update driver set d_name='"+d_name+"',d_license='"+d_license+"',d_phone="+d_phone+" where d_id="+d_id,
                    (err,result)=>{
        if(err){
            res.send({"update":"fail"});
            console.log(err)
        }else{
            console.log("Driver_Details is updated...!!")
            res.send({"update":"success"});
        }
    });
});

module.exports = router;


