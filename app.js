const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRouter = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); x-www-form-urlencoded <form.
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRouter);

mongoose
  .connect(
    "mongodb+srv://beata:1234@cluster0-b4yc7.mongodb.net/network?retryWrites=true&w=majority"
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
