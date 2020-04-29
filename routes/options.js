/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const optionController = require("../controllers/option_controller");

/**********************MAKING ROUTES*****************************/
router.delete("/:id/delete", optionController.deleteOption);

router.post("/:id/add_vote", optionController.addVote);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;