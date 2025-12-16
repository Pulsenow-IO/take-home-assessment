const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const { initializeMockData } = require('./data/mockDataGenerator');
const { initializeData } = require('./models/poolModel');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize complex mock data on server start
console.log('\n🚀 Starting backend server...');
console.log('📊 Initializing complex mock data...');
const mockData = initializeMockData();
initializeData(mockData);
console.log('✨ Mock data initialization complete!\n');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// API Routes
app.use('/api', routes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`\n📊 API endpoints available:`);
  console.log(`   GET /api/health`);
  console.log(`   GET /api/pools`);
  console.log(`   GET /api/pools/:poolId`);
  console.log(`   GET /api/pools/:poolId/analytics`);
  console.log(`   GET /api/user/:address/stakes`);
  console.log(`   GET /api/user/:address/history`);
  console.log(`   GET /api/analytics`);
  console.log(`\n💡 Mock data includes:`);
  console.log(`   - ${mockData.pools.length} staking pools`);
  console.log(`   - Complex time-series data (180 days)`);
  console.log(`   - Detailed analytics and metrics`);
  console.log(`   - Transaction history generation`);
  console.log(`   - Realistic staker data\n`);
});

module.exports = app;
