/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING QUESTION SCHEMA*****************************/
const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    options:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Option"
        }
    ]
});

/******************MAKING MODEL*********************************/
const Question = mongoose.model("Question", questionSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Question;