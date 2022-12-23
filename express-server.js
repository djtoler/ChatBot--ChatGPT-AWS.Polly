const express = require("express");
const app = express();
const connectDB = require('./server/database');
const cors = require("cors");
const bodyParser = require('body-parser')

connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send("endpoint is working!"))

app.listen(9000, () => {
    console.log("Listen on the port 9000...");
});
