/****************IMPORTING PACKAGE/MODELS*************************/
const Question = require("../models/question");
const Option = require("../models/option");

/**********EXPORTING FUNCTION FOR deleting Option ROUTE******************/
module.exports.deleteOption = async function(req, res){
    try{
        let option = await Option.findOne({_id: req.params.id});
        if(option){
            if(option.votes > 0){
                // console.log("Not able to delete the option");
                return res.status(409).json({
                    message: "Not able to delete Option because it has votes in it!"
                });
            }
            await Option.deleteOne({_id: req.params.id});
            return res.status(200).json({
                message: "Deleted Successfully!",
                // data: que
            });

        }else{
            // console.log("Option not exists");
            return res.status(404).json({
                message: "Option not Found!"
            });
        }
    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
}

/**********EXPORTING FUNCTION FOR adding Vote ROUTE******************/
module.exports.addVote = async function(req, res){
    try{
        let option = await Option.findOne({_id: req.params.id});
        if(option){
            let curVote = option.votes;
            option.votes = curVote + 1;

            await option.save();

            return res.status(200).json({
                message: "Option Vote Updated Successfully!",
            });
        }else{
            // console.log("Option not exists");
            return res.status(404).json({
                message: "Option not Found!"
            });
        }
    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}