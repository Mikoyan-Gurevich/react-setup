"use strict";

var util = require('util');

var env = process.env.NODE_ENV || 'development';
var errorMap = require('../lib/errorMap');
    
module.exports = function(err, req, res, next) {

  console.log('Received error:', err);

  if (err) {
    var response = {};
    response.error = err.message || "Encountered an error";
    response.errorCode = err.errorCode || '';
    response.stack = err.stack ? err.stack.split('\n') : '';
    var httpStatusCode = err.httpStatusCode || 400;

    console.log("[Error] url # " + req.url + ", message: " + response.error + " , code: " + response.errorCode);

    if (env == 'production') {
        if (code == 500) {
        console.log(err.stack.split('\n'));
        response.error = response.status.message.message = 'An unexpected error has occured';
        }
    } else {
        response.stack = err.stack.split('\n');
        console.log(err.stack.split('\n'));
    }
  }
  res.status(httpStatusCode).json(response);

};

/*-----------------------------------------------------------------------------------------------*/

if (require.main === module) {
  (function () {
    var title = 'testing';
    var err = new Error('error testing');
    console.log("Error Handler: %s, message: %s, stacktrace: ", title, err &&
      err.message, err && err.stack);
  })();
}
