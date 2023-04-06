const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //First 2 comment
   // useCreateIndex: true,
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Connect Database
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("🚀 DB connected successfully!");
});

//Connect PORT
app.listen(PORT, () => {
    console.log(`💡Server is started on port number: ${PORT}`);
});