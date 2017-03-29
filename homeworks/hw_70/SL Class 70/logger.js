'use strict';

module.exports = function (req, res, next) {
    console.log(new Date().toLocaleString() + ': ' + req.url);
    next();
};