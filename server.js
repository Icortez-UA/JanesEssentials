//require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./server/users/users.controller")
const bodyParser = require('body-parser')
const jwt = require('./server/_helpers/jwt');
const errorHandlers = require('./server/_helpers/error-handler');
const path = require("path");
const mongoose = require('mongoose');


app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'build')));
  }
//use this to secure api

// api routes
app.use(router);
mongoose.connect(process.env.MONGODB_URI || "mongodb://Isaac:Janes420@ds017672.mlab.com:17672/heroku_9g358wqb", { useNewUrlParser: true });

// global error handler
app.use(errorHandlers.errorHandler);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(jwt.expressjwt());
//Start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function(){
    console.log('Server listening on port ' + port);
});