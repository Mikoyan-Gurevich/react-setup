'use strict';

var _ = require('lodash');

var ApiError = require('../../lib/apiError');
var utils = require('../../lib/utils');

var collect =  function (req, res, next) {
  console.log('Received request : ', (!req.body) ? 'Empty body!' : req.body);

  if (req && req.body) {
    return next();
  } else {
    return next(new ApiError('NO_DATA_FE'));
  }
};

module.exports = {
  collect : collect
};
