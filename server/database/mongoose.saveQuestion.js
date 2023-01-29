const Question = require("./mongoose.questionSchema")

const saveToMongoDB = async (question, answer) => {
    const newQuestion = await Question.create({question, answer});
    newQuestion.save();
    console.log("Logging from Mongo File",  newQuestion, question);
    return newQuestion
}

saveToMongoDB()
module.exports = saveToMongoDB