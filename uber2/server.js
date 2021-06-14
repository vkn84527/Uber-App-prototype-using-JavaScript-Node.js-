
var express = require("express");
var bodyparser = require("body-parser");
//var cors = require("cors");
var app = express();
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
//app.use(cors());
var fetch = require('./fetch/fetch');
app.use('/',fetch);

var insert = require('./insert/insert');
app.use('/',insert);

var update = require('./update/update');
app.use('/',update);

var remove = require('./delete/delete');
app.use('/',remove);
app.listen(3000);
console.log("Server Listening the port no.3000");

