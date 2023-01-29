const saveToMongoDB = require("../database/mongoose.saveQuestion");

const runSaveToDatabaseJob = async (question, answer, database) => {
    console.log(question, answer, database, "<<--------!!!question, answer, database");
    return {question, answer, database}
}

module.exports = {runSaveToDatabaseJob, saveToMongoDB}
