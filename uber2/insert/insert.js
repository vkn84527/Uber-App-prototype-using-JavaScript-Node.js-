
var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();

router.post("/create-user-ID", (req, res) => {
    var c_name = req.body.c_name;
    var c_id = req.body.c_id;
    var c_phone = req.body.c_phone
    var c_mail = req.body.c_mail;
    connection.query("SELECT c_id FROM customer WHERE c_id = '"+ c_id +"'", function(err, result, field){
        if(result.length === 0){
            connection.query("insert into customer values('"+c_name+"',"+c_id+","+c_phone+",'"+ c_mail+"')",
        (err, result) => {
            if (err) {
                res.send({ "Not Created": "fail" });
                console.log(err)
            } else {
                res.send({ "Created": "success" });
                console.log("Successfully created User")
            }
        })
    }
    else{  
        console.log("User Already Created !!")
        res.send({ "This User Already Exist !!": "success" });
     }    
})
})

router.post("/create-driver-ID", (req, res) => {
    var d_name = req.body.d_name;
    var d_id = req.body.d_id;
    var d_phone = req.body.d_phone
    var d_license = req.body.d_license;
    connection.query("SELECT d_id FROM driver WHERE d_id = '"+ d_id +"'", function(err, result, field){
        if(result.length === 0){
            connection.query("insert into driver values('"+d_name+"',"+d_id+","+d_phone+",'"+d_license+"')",
        (err, result) => {
            if (err) {
                res.send({ "Not Created": "fail" });
                console.log(err)
            } else {
                res.send({ "Created": "success" });
                console.log("Successfully created Drive_ID")
            }
        })
    }
    else{  
        console.log("Driver_ID Already Created !!")
        res.send({ "This Driver_ID Already Exist !!": "success" });
     }    
})
})

router.post("/create-booking-ID", (req, res) => {
    var b_id = req.body.b_id;
    var d_id = req.body.d_id;
    var c_id = req.body.c_id
    var car_no= req.body.car_no;
    connection.query("SELECT b_id FROM booking WHERE b_id = '"+ d_id +"'", function(err, result, field){
        if(result.length === 0){
            connection.query("insert into booking values("+b_id+","+d_id+","+c_id+","+car_no+")",
        (err, result) => {
            if (err) {
                res.send({ "Not Created": "fail" });
                console.log(err)
            } else {
                res.send({ "Created": "success" });
                console.log("Successfully created Booking_ID")
            }
        })
    }
    else{  
        console.log("Booking_ID Already Created !!")
        res.send({ "This Booking_ID Already Exist !!": "success" });
     }    
})
})

module.exports = router;