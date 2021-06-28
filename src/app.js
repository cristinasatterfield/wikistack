const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { db } = require('../models');

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "../public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());
// app.use(require('method-override')('_method'));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.get('/', async (req, res, next) => {
  try {
    res.send('<h1>Hello World!</h1>');
  } catch (err) {
    next(err);
  }
})

app.use("/wiki", require("../routes/wiki"));
app.use("/users", require("../routes/users"));

//error handler
app.use((err, req, res, next) => {
  res.sendStatus(err.status);
});

module.exports = app;
