/****************IMPORTING PACKAGE/MODELS*************************/
const Question = require("../models/question");
const Option = require("../models/option");

/**********EXPORTING FUNCTION FOR creating Question ROUTE******************/
module.exports.create = async function(req, res){
    try{
        // console.log(req.body);
        let que = await Question.create({
            question: req.body.question
        });

        return res.status(200).json({
            message: "Question created",
            data: que
        });

    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

/**********EXPORTING FUNCTION FOR creating Option ROUTE******************/
module.exports.createOption = async function(req, res){
    try{
        let que = await Question.findOne({_id: req.params.id});
        if(que){
            
            let option = await Option.create({
                question: que._id,
                text:  req.body.text,
            });
            let link = req.protocol + "://" + req.headers.host + "/options/" + option._id + "/add_vote";
            option.link_to_vote = link;
            await option.save();

            que.options.push(option._id);
            await que.save();

            return res.status(200).json({
                message: "Option Added Successfully!",
                data: option
            });

        }else{
            // console.log("Question not exists");
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
        

    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
}

/**********EXPORTING FUNCTION FOR deleting Question ROUTE******************/
module.exports.deleteQuestion = async function(req, res){
    try{
        let que = await Question.findOne({_id: req.params.id}).populate("options");
        if(que){
            if(que.options.length > 0){
                // console.log(que.options.length);
                let check = false;
                for(option of que.options){
                    if(option.votes > 0){
                        // console.log(option.votes);
                        check = true;
                    }
                    // console.log(option.votes);
                }
                
                if(check){
                    
                    return res.status(409).json({
                        message: "Not able to delete Question because options has votes in it!",
                        // data: que
                    });
                }
                await Option.deleteMany({question: que._id});
                await Question.deleteOne({_id: que._id});
                return res.status(200).json({
                    message: "Deleted Successfully!",
                    // data: que
                });
            }
            
        }else{
            // console.log("Question not exists");
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

/**********EXPORTING FUNCTION FOR listing all Questions ROUTE******************/

module.exports.listQuestion = async function(req, res){
    try{
        let que = await Question.findOne({_id: req.params.id}).populate("options");
        if(que){
            // console.log("Question Found");
            return res.status(200).json({
                data: que
            });
        }else{
            // console.log("Question not exists");
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
    }catch(err){
        // console.log("Error in creating Question", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}