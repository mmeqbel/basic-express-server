'use strict';
const express = require('express'); //node framwork for building REST API

const notFoundHandler = require('./error-handlers/404.js'); // handler for bad requests
const errorHandler = require('./error-handlers/500.js'); // handler for error
const logger = require('./middleware/logger.js'); // middleware
const validator = require('./middleware/validator.js'); // middleware

const app = express();

//global middleware
app.use(express.json()); // add body to requests
app.use(logger); // befor handling requests run the logger function
app.use(validator); // befor handling requests run the validator function

// http://localhost:5000/person?name=bob

/* normal get request on /person with query  */
app.get('/person', (req, res) => {
  console.log('__QUERY__', req.query);
  const output = {
    name: req.query.name,
  };
  res.json(output); //response to  the query as json 
});


app.use('*', notFoundHandler);  //404
app.use(errorHandler);  //505

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 5000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};