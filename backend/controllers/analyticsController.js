const { PoolModel, pools } = require('../models/poolModel');
const { AppError } = require('../utils/errors');

class AnalyticsController {
  /**
   * Get analytics for a specific pool
   * GET /api/pools/:poolId/analytics
   */
  async getPoolAnalytics(req, res, next) {
    try {
      const { poolId } = req.params;
      const pool = await PoolModel.findById(poolId);
      
      if (!pool) {
        throw new AppError('Pool not found', 404);
      }

      // Generate time-series data (last 30 days)
      const days = parseInt(req.query.days) || 30;
      const timeSeriesData = this.generateTimeSeriesData(pool, days);
      
      res.json({
        success: true,
        data: {
          poolId: pool.id,
          poolName: pool.name,
          timeSeries: timeSeriesData,
          summary: {
            avgAPY: pool.apy,
            avgTVL: pool.tvl,
            totalRewardsDistributed: pool.poolMetrics.totalRewardsDistributed,
            totalStakers: pool.totalStakers,
            currentAPY: pool.apy,
            currentTVL: pool.tvl
          },
          metrics: pool.poolMetrics,
          riskFactors: pool.riskFactors
        },
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Generate time-series data for analytics
   * @private
   */
  generateTimeSeriesData(pool, days = 30) {
    const timeSeriesData = [];
    const now = Date.now();
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      timeSeriesData.push({
        date: date.toISOString().split('T')[0],
        timestamp: date.getTime(),
        tvl: pool.tvl * (1 + Math.random() * 0.1 - 0.05),
        apy: pool.apy * (1 + Math.random() * 0.05 - 0.025),
        stakers: pool.totalStakers + Math.floor(Math.random() * 50),
        rewards: pool.tvl * pool.rewardRate / 365 * (1 + Math.random() * 0.2 - 0.1),
        volume: pool.analytics.dailyVolume[i % pool.analytics.dailyVolume.length] || 0
      });
    }
    
    return timeSeriesData;
  }

  /**
   * Get overall platform analytics
   * GET /api/analytics
   */
  async getPlatformAnalytics(req, res, next) {
    try {
      const allPools = await PoolModel.findAll();
      
      const totalTVL = allPools.reduce((sum, pool) => sum + pool.tvl, 0);
      const totalStakers = allPools.reduce((sum, pool) => sum + pool.totalStakers, 0);
      const totalRewards = allPools.reduce(
        (sum, pool) => sum + (pool.poolMetrics?.totalRewardsDistributed || 0),
        0
      );
      const avgAPY = allPools.reduce((sum, pool) => sum + pool.apy, 0) / allPools.length;

      res.json({
        success: true,
        data: {
          totalTVL,
          totalStakers,
          totalRewardsDistributed: totalRewards,
          averageAPY: avgAPY,
          activePools: allPools.filter(p => p.status === 'active').length,
          totalPools: allPools.length
        },
        timestamp: Date.now()
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AnalyticsController();

