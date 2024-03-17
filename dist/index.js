const LOG = require('./logger/logger');
const middleware = require('./middelware/index')

// default export the middleware
exports = module.exports = middleware;
exports.LOG = LOG;