const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST endpoint to handle contact form submissions
router.post('/submit', async (req, res) => {
  try {
    console.log('=== Contact Form Submission Started ===');
    console.log('Received data:', req.body);
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: ['All fields are required']
      });
    }

    // Create new contact document
    console.log('Creating contact document...');
    const contact = new Contact({
      name,
      email,
      phone,
      message
    });

    // Validate the document
    console.log('Validating contact document...');
    const validationError = contact.validateSync();
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
    const savedContact = await contact.save();
    console.log('Contact saved successfully:', savedContact);

    console.log('=== Contact Form Submission Completed ===');
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: savedContact
    });
  } catch (error) {
    console.error('=== Contact Form Submission Error ===');
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
      error: 'Failed to submit contact form',
      details: [error.message]
    });
    console.error('=== End of Error Log ===');
  }
});

// GET endpoint to retrieve all contact submissions
router.get('/submissions', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submissions',
      details: error.message
    });
  }
});

// GET endpoint to retrieve a single contact submission (protected route)
router.get('/submissions/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact submission:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submission',
      details: error.message
    });
  }
});

// PATCH endpoint to update contact submission status (protected route)
router.patch('/submissions/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'in-progress', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact submission status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact submission:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update contact submission',
      details: error.message
    });
  }
});

module.exports = router; 