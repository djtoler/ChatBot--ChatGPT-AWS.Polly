const express = require("express");
const app = express();
const connectDB = require("./server/express.mongoose.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const textInputPrompt = require("./server/routes/textInputPrompt")
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());


app.use("/user-input", textInputPrompt)
app.get("/", (req, res) => res.send("endpoint is working!"));
// app.post("/user-input", (req, res) => console.log(req.body));



app.listen(9000, () => {
  console.log("Listen on the port 9000...");
});
