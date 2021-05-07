const express = requre("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express ();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongo://localhost/workout-tracker",
{
    useNewUrlParser:true,
    useFindAndModify: false
}
);

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));