const { Topic } = require("../models/topics");
const ErrorResponse = require("../utils/errorResponse");
const { Question } = require("../models/questions");

exports.getQuestions = async (req, res, next) => {
  try {
    //finds _id of all topics that match the search term

    const topics = await Topic.find({
      $or: [
        { topic: req.query.q },
        { path: new RegExp(`,${req.query.q},`, "i") },
      ],
    }).select("_id");

    //if no topics are found, return an error

    if (topics.length === 0 || topics === null) {
      return next(new ErrorResponse(`No topics found for ${req.query.q}`, 404));
    }

    //finds all the questions that match the topics returned by topics collection

    const questions = await Question.find({
      annotations: { $in: topics },
    }).select("questionno -_id");

    //if no questions are found, return an error

    if (questions.length === 0 || questions === null) {
      return next(
        new ErrorResponse(`No questions found for ${req.query.q}`, 404)
      );
    }

    //if questions are found, return them

    res.status(200).json(questions);
  } catch (err) {
    next(new ErrorResponse(`Search was unsucessful due to server error `, 500));
  }
};
