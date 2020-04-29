/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const questionController = require("../controllers/question_controller");

/**********************MAKING ROUTES*****************************/
router.post("/create", questionController.create);

router.get("/:id", questionController.listQuestion);

router.post("/:id/options/create", questionController.createOption);

router.delete("/:id/delete", questionController.deleteQuestion);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;