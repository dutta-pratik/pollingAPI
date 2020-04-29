/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING OPTION SCHEMA*****************************/
const optionSchema = new mongoose.Schema({
    question:{
        type: mongoose.Schema.ObjectId,
        ref: "Question"
    },
    text:{
        type: String,
        unique: true
    },
    votes:{
        type: Number,
        default: 0
    },
    link_to_vote:{
        type: String
    }
});

/******************MAKING MODEL*********************************/
const Option = mongoose.model("Option", optionSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Option;