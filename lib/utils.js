'use strict';

var utils = {

  timeRequest: function (req, name) {
    name = name || 'no-name';
    var now = Date.now();
    if (!req.startTime) {
      req.startTime = now;
    }
    if (!req.reqTimes) {
      req.reqTimes = [];
    }

    req.reqTimes.push([name, now - req.startTime].join('-'));
    req.startTime = now;
  }

};

module.exports = utils;
