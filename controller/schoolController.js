const catchAsyncError = require('../utils/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');
const School = require('../models/school');
const { haversineDistance } = require('../utils/distanceCalculation');

exports.addSchool = catchAsyncError(async (req, res, next) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return next(new ErrorHandler('All fields are required', 400));
    }

    const newSchool = await School.create({
        name,
        address,
        latitude,
        longitude
    });

    if (!newSchool) {
        return next(new ErrorHandler('Failed to create school', 400));
    }

    const data = {
        id: newSchool.id,
        name: newSchool.name,
        address: newSchool.address,
        latitude: newSchool.latitude,
        longitude: newSchool.longitude
    };

    return res.status(201).json({
        success: true,
        data,
        message: 'School created successfully.',
    });
});

exports.listSchools = catchAsyncError(async (req, res, next) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return next(new ErrorHandler('Latitude and longitude are required.', 400));
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return next(new ErrorHandler('Invalid latitude or longitude.', 400));
    }

    if (userLat < -90 || userLat > 90) {
        return next(new ErrorHandler('Latitude must be between -90 and 90.', 400));
    }

    if (userLon < -180 || userLon > 180) {
        return next(new ErrorHandler('Longitude must be between -180 and 180.', 400));
    }

    const schools = await School.findAll();

    // Calculate the distance for each school and sort them
    const schoolsWithDistance = schools.map((school) => {
        const distance = haversineDistance(userLat, userLon, school.latitude, school.longitude);
        return {
            ...school.toJSON(),
            distance, // Add the calculated distance to the school object
        };
    });

    // Sort schools by distance
    const sortedSchools = schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    return res.status(200).json({
        success: true,
        data: sortedSchools,
        message: 'School data retrieved and sorted by proximity successfully.',
    });
});
