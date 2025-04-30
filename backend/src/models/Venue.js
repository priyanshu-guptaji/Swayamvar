const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9+\-\s()]{10,}$/, 'Please enter a valid phone number']
  },
  venueName: {
    type: String,
    required: [true, 'Venue name is required'],
    trim: true
  },
  eventDate: {
    type: Date,
    required: [true, 'Event date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required']
  },
  guestCount: {
    type: Number,
    required: [true, 'Guest count is required'],
    min: [1, 'Guest count must be at least 1']
  },
  roomsRequired: {
    type: Number,
    default: 0,
    min: [0, 'Rooms required cannot be negative']
  },
  hallsRequired: {
    type: Number,
    default: 1,
    min: [1, 'At least one hall is required']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount cannot be negative']
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
venueSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Venue', venueSchema); 