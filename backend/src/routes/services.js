const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get services by category
router.get('/category/:category', async (req, res) => {
  try {
    const services = await Service.find({ category: req.params.category });
    res.json(services);
  } catch (error) {
    console.error('Error fetching services by category:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get featured services
router.get('/featured', async (req, res) => {
  try {
    const services = await Service.find({ isFeatured: true });
    res.json(services);
  } catch (error) {
    console.error('Error fetching featured services:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new service (admin only)
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update service (admin only)
router.put('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete service (admin only)
router.delete('/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 