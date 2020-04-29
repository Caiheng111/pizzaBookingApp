
require("dotenv").config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const core = require('core')

// mongoDB database connection
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

var app = express();
app.use(express.json());


app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/availablity",require('./routes/availablityRoutes'))
app.use("/reserve",require('./routes/reservationRoutes'))


// database error check

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
  console.log("Connected to DB");
});

app.use('/', indexRouter);


module.exports = app;
