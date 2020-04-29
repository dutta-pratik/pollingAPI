/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**********************MAKING ROUTES*****************************/
router.use("/questions", require("./questions"));

router.use("/options", require("./options"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;