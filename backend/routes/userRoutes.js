const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateEthereumAddress } = require('../middleware/validator');

// GET /api/user/:address/stakes - Get user's staking positions
router.get('/:address/stakes', validateEthereumAddress, userController.getUserStakes.bind(userController));

// GET /api/user/:address/history - Get user's transaction history
router.get('/:address/history', validateEthereumAddress, userController.getUserHistory.bind(userController));

module.exports = router;

