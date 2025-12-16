const { PoolModel, pools } = require('../models/poolModel');
const { AppError } = require('../utils/errors');

class PoolController {
  /**
   * Get all staking pools
   * GET /api/pools
   */
  async getAllPools(req, res, next) {
    try {
      const pools = await PoolModel.findAll();
      
      res.json({
        success: true,
        data: pools,
        count: pools.length,
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get a specific pool by ID
   * GET /api/pools/:poolId
   */
  async getPoolById(req, res, next) {
    try {
      const { poolId } = req.params;
      const pool = await PoolModel.findById(poolId);
      
      if (!pool) {
        throw new AppError('Pool not found', 404);
      }

      res.json({
        success: true,
        data: pool,
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get active pools only
   * GET /api/pools?status=active
   */
  async getActivePools(req, res, next) {
    try {
      const { status } = req.query;
      
      if (status === 'active') {
        const activePools = await PoolModel.findActive();
        return res.json({
          success: true,
          data: activePools,
          count: activePools.length,
          timestamp: Date.now()
        });
      }

      // If no status filter, return all pools
      return this.getAllPools(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PoolController();

