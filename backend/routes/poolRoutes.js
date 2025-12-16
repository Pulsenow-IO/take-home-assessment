const express = require('express');
const router = express.Router();
const poolController = require('../controllers/poolController');
const { validatePoolId } = require('../middleware/validator');

// GET /api/pools - Get all pools or filter by status
router.get('/', poolController.getActivePools.bind(poolController));

// GET /api/pools/:poolId - Get specific pool
router.get('/:poolId', validatePoolId, poolController.getPoolById.bind(poolController));

module.exports = router;

