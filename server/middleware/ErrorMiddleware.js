const AppError = require('../error/AppError');

module.exports = function (err, req, res, next) {
    if(err instanceof AppError) {
        res.status(err.status).json({
            message: err.message
        });
    }
}