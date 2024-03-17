/**
 * @param { Object } config 
 * @returns { Function }
 */
const loggingMiddleware = (config) => {
    // configure the middleware
    console.log('Config:', config);
    return (req, res, next) => {
        console.log('Request::', req?.url);
        next();
    }
}

module.exports = loggingMiddleware;