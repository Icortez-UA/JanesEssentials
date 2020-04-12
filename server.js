require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require('./server/_helpers/jwt');
const errorHandlers = require('./server/_helpers/error-handler');
const path = require("path");


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

//use this to secure api
//app.use(jwt.expressjwt());

// api routes
app.use('/users', require('./server/users/users.controller'));

// global error handler
app.use(errorHandlers.errorHandler);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });


//Start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function(){
    console.log('Server listening on port ' + port);
});