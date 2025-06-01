const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');

// POST endpoint to handle venue booking submissions
router.post('/book', async (req, res) => {
  try {
    console.log('=== Venue Booking Submission Started ===');
    console.log('Received data:', req.body);
    const { 
      name, 
      email, 
      phone, 
      venueName, 
      eventDate, 
      endDate,
      guestCount, 
      roomsRequired,
      hallsRequired,
      totalAmount,
      message 
    } = req.body;

    if (!name || !email || !phone || !venueName || !eventDate || !endDate || !guestCount || !totalAmount) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: ['All required fields must be provided']
      });
    }

    // Create new venue booking document
    console.log('Creating venue booking document...');
    const venue = new Venue({
      name,
      email,
      phone,
      venueName,
      eventDate,
      endDate,
      guestCount,
      roomsRequired: roomsRequired || 0,
      hallsRequired: hallsRequired || 1,
      totalAmount,
      message: message || ''
    });

    // Validate the document
    console.log('Validating venue booking document...');
    const validationError = venue.validateSync();
    if (validationError) {
      console.error('Schema validation failed:', validationError);
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: Object.values(validationError.errors).map(err => err.message)
      });
    }

    console.log('Document passed validation, attempting to save...');
    // Save to database
    const savedVenue = await venue.save();
    console.log('Venue booking saved successfully:', savedVenue);

    console.log('=== Venue Booking Submission Completed ===');
    res.status(201).json({
      success: true,
      message: 'Venue booking submitted successfully',
      data: savedVenue
    });
  } catch (error) {
    console.error('=== Venue Booking Submission Error ===');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Check if it's a MongoDB error
    if (error.name === 'MongoError' || error.name === 'MongoServerError') {
      console.error('MongoDB specific error:', error);
      return res.status(500).json({
        success: false,
        error: 'Database Error',
        details: ['Failed to save to database. Please try again.']
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to submit venue booking',
      details: [error.message]
    });
    console.error('=== End of Error Log ===');
  }
});

// GET endpoint to retrieve all venue bookings (protected route)
router.get('/bookings', async (req, res) => {
  try {
    const venues = await Venue.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: venues.length,
      data: venues
    });
  } catch (error) {
    console.error('Error fetching venue bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch venue bookings',
      details: error.message
    });
  }
});

// GET endpoint to retrieve a single venue booking (protected route)
router.get('/bookings/:id', async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id).select('-__v');
    
    if (!venue) {
      return res.status(404).json({
        success: false,
        error: 'Venue booking not found'
      });
    }

    res.json({
      success: true,
      data: venue
    });
  } catch (error) {
    console.error('Error fetching venue booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch venue booking',
      details: error.message
    });
  }
});

// PATCH endpoint to update venue booking status (protected route)
router.patch('/bookings/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value'
      });
    }

    const venue = await Venue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!venue) {
      return res.status(404).json({
        success: false,
        error: 'Venue booking not found'
      });
    }

    res.json({
      success: true,
      message: 'Venue booking status updated successfully',
      data: venue
    });
  } catch (error) {
    console.error('Error updating venue booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update venue booking',
      details: error.message
    });
  }
});

module.exports = router; 