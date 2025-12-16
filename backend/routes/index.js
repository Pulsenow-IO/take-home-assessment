const express = require('express');
const router = express.Router();
const poolRoutes = require('./poolRoutes');
const analyticsRoutes = require('./analyticsRoutes');
const userRoutes = require('./userRoutes');
const analyticsController = require('../controllers/analyticsController');

// Health check
router.get('/health', (req, res) => {
  const { getMockData } = require('../models/poolModel');
  const mockData = getMockData();
  
  res.json({ 
    status: 'ok', 
    timestamp: Date.now(),
    uptime: process.uptime(),
    mockData: mockData ? {
      initializedAt: mockData.initializedAt,
      version: mockData.version,
      poolCount: mockData.pools ? mockData.pools.length : 0
    } : null
  });
});

// Platform analytics
router.get('/analytics', analyticsController.getPlatformAnalytics.bind(analyticsController));

// API routes
router.use('/pools', poolRoutes);
router.use('/pools', analyticsRoutes); // /api/pools/:poolId/analytics
router.use('/user', userRoutes);

module.exports = router;

