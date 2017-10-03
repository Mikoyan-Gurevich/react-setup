'use strict';

var error = require('./error');
var respond = require('./respond');
var validation = require('./validations');

module.exports = function(app) {

	app.all('/_status', function(req, res, next) {
	  res.sendStatus(200);
	});

	app.post('/v1/validate', validation.collect, respond, error);

};