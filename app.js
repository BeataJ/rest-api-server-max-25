const express = require('express');
const bodyParsser = require('body-parser')
const app = express();

// app.use(bodyParsser.urlencoded({}));

const feedRouter = require('./routes/feed')

app.use('/feed', feedRouter);

app.listen(8080);