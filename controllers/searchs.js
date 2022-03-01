const { Topic } = require("../models/topics");
const ErrorResponse = require("../utils/errorResponse");
const { Question } = require("../models/questions");

exports.getQuestions = async (req, res, next) => {
  try {
    const topics = await Topic.find({
      $or: [
        { topic: req.query.q },
        { path: new RegExp(`,${req.query.q},`, "i") },
      ],
    }).select("_id");
    
    if(!topics) {
      return next(new ErrorResponse("No topics found", 404));
    }
    
    const questions = await Question.find({annotations:{ "$in": topics }}).select("questionno -_id");
    

    res.status(200).json(questions);
  } catch (err) {
    next(new ErrorResponse(`Search couldnot due to server error ${err}`, 500));
  }
};
