const express = require('express');
const schoolRoutes = require('./route/schoolRoutes');
const globalErrorHandler = require('./utils/globalErrorHandler');
const catchAsyncError = require('./utils/catchAsyncError');
const ErrorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());

// Routes
app.use('/api/v1', schoolRoutes);

app.get('/test', catchAsyncError(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "School Management server running.",
    });
}));

app.use('*', catchAsyncError(async (req, res, next) => {
    return next(new ErrorHandler(`Can't find ${req.originalUrl} on this server.`, 404));
}));

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
