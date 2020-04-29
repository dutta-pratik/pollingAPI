/********************INITIALIZING PORT*********************************/
const port = 8000;

/***************IMPORTING REQUIRED PACKAGE*****************************/
const express = require("express");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");

/******************INITIALIZING EXPRESS*******************************/
const app = express();

/*****************USING PARSER AND ENCODER***************************/
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

/*******************DIRECTING TO ROUTES******************************/
app.use("/", require("./routes/index"));

/******************CHECKING SERVER STATUS****************************/
app.listen(port, function(err){
    if(err){console.log("Error in running server"); return;}
    console.log("Server is up and running at port", port);
});
