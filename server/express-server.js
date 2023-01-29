require('dotenv').config();
console.log(process.env)


const express = require("express");
const app = express();
const connectMongoDB = require("./database/mongoose.connection.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const textInputPrompt = require("./routes/textInputPrompt")

connectMongoDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());


app.use("/user-input", textInputPrompt)
app.get("/", (req, res) => res.send("endpoint is working!"));

app.listen(9000, () => {
  console.log("Listen on the port 9000...");
});


