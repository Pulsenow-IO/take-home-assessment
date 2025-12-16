const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { validatePoolId } = require('../middleware/validator');

// GET /api/pools/:poolId/analytics - Get pool analytics
router.get('/:poolId/analytics', validatePoolId, analyticsController.getPoolAnalytics.bind(analyticsController));

module.exports = router;

