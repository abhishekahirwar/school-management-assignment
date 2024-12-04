const ErrorHandler = require('./errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.name === "SequelizeValidationError") {
        err = new ErrorHandler(err.errors[0].message, 400);
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
