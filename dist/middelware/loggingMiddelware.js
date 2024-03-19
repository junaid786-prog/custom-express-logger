/**
 * @param { Object } config 
 * @returns { Function }
 */
const loggingMiddleware = (config) => {
    // configure the middleware
    return (req, res, next) => {
        console.log('Request::', req?.url);
        next();
    }
}

module.exports = loggingMiddleware;