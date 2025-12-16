const { UserStakeModel } = require('../models/poolModel');
const { PoolModel } = require('../models/poolModel');
const { AppError } = require('../utils/errors');

class UserController {
  /**
   * Get user's staking positions
   * GET /api/user/:address/stakes
   */
  async getUserStakes(req, res, next) {
    try {
      const { address } = req.params;
      const userStakes = await UserStakeModel.findByAddress(address);
      
      // Enrich stakes with pool data
      const enrichedStakes = await Promise.all(
        userStakes.map(async (stake) => {
          const pool = await PoolModel.findById(stake.poolId);
          return {
            ...stake,
            pool: pool || null
          };
        })
      );

      const totalStaked = userStakes.reduce((sum, s) => sum + s.stakedAmount, 0);
      const totalRewards = userStakes.reduce((sum, s) => sum + s.rewardAmount, 0);

      res.json({
        success: true,
        data: {
          address: address.toLowerCase(), // Normalize address
          stakes: enrichedStakes,
          summary: {
            totalStaked,
            totalRewards,
            activePositions: userStakes.length,
            totalPools: [...new Set(userStakes.map(s => s.poolId))].length
          }
        },
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get user's staking history
   * GET /api/user/:address/history
   */
  async getUserHistory(req, res, next) {
    try {
      const { address } = req.params;
      const userStakes = await UserStakeModel.findByAddress(address);
      
      // Flatten all transactions from all stakes
      const allTransactions = [];
      userStakes.forEach(stake => {
        stake.transactions.forEach(tx => {
          allTransactions.push({
            ...tx,
            poolId: stake.poolId,
            poolName: null // Will be enriched if needed
          });
        });
      });

      // Sort by timestamp (newest first)
      allTransactions.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );

      res.json({
        success: true,
        data: {
          address: address.toLowerCase(),
          transactions: allTransactions,
          count: allTransactions.length
        },
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();

