// Mock data model - uses complex data generator
// Data is initialized when server starts

let pools = [];
let mockData = null;

// Initialize data from generator
const initializeData = (data) => {
  pools = data.pools || [];
  mockData = data;
  console.log('✅ Pool model initialized with complex data');
};

// Mock data model - simulates database
// In a real application, this would interact with a database

// Default pools (fallback if generator not initialized)
const defaultPools = [
  {
    id: 'pool-1',
    name: 'Ethereum High Yield',
    description: 'Stake ETH and earn high APY with compound rewards',
    token: {
      symbol: 'ETH',
      name: 'Ethereum',
      address: '0x0000000000000000000000000000000000000000',
      decimals: 18
    },
    rewardToken: {
      symbol: 'REWARD',
      name: 'Reward Token',
      address: '0x1111111111111111111111111111111111111111',
      decimals: 18
    },
    apy: 12.5,
    tvl: 2456789.45,
    minStake: 0.1,
    maxStake: 1000000,
    lockPeriod: 30, // days
    totalStakers: 1234,
    rewardRate: 0.125, // 12.5% per year
    analytics: {
      historicalAPY: [10.2, 11.8, 12.1, 12.5, 12.3, 12.5],
      dailyVolume: [45678, 52341, 48923, 51234, 47890, 50321],
      timestamp: Date.now()
    },
    poolMetrics: {
      totalRewardsDistributed: 456789.12,
      averageStakeAmount: 1991.23,
      medianStakeAmount: 850.50,
      topStakerAmount: 125000.00
    },
    riskFactors: {
      riskLevel: 'medium',
      liquidityScore: 8.5,
      auditStatus: 'audited',
      insuranceCoverage: true
    },
    createdAt: '2024-01-15T00:00:00Z',
    status: 'active'
  },
  {
    id: 'pool-2',
    name: 'USDC Stable Pool',
    description: 'Low-risk stablecoin staking with consistent returns',
    token: {
      symbol: 'USDC',
      name: 'USD Coin',
      address: '0x2222222222222222222222222222222222222222',
      decimals: 6
    },
    rewardToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      address: '0x2222222222222222222222222222222222222222',
      decimals: 6
    },
    apy: 8.3,
    tvl: 5678901.23,
    minStake: 100,
    maxStake: 5000000,
    lockPeriod: 0,
    totalStakers: 5678,
    rewardRate: 0.083,
    analytics: {
      historicalAPY: [8.1, 8.2, 8.25, 8.3, 8.28, 8.3],
      dailyVolume: [234567, 245678, 239012, 251234, 247890, 249123],
      timestamp: Date.now()
    },
    poolMetrics: {
      totalRewardsDistributed: 1234567.89,
      averageStakeAmount: 1000.50,
      medianStakeAmount: 500.00,
      topStakerAmount: 500000.00
    },
    riskFactors: {
      riskLevel: 'low',
      liquidityScore: 9.5,
      auditStatus: 'audited',
      insuranceCoverage: true
    },
    createdAt: '2024-01-10T00:00:00Z',
    status: 'active'
  },
  {
    id: 'pool-3',
    name: 'BTC High Risk High Reward',
    description: 'Aggressive staking strategy with higher risk and rewards',
    token: {
      symbol: 'WBTC',
      name: 'Wrapped Bitcoin',
      address: '0x3333333333333333333333333333333333333333',
      decimals: 8
    },
    rewardToken: {
      symbol: 'REWARD',
      name: 'Reward Token',
      address: '0x1111111111111111111111111111111111111111',
      decimals: 18
    },
    apy: 18.7,
    tvl: 1234567.89,
    minStake: 0.01,
    maxStake: 500000,
    lockPeriod: 90,
    totalStakers: 456,
    rewardRate: 0.187,
    analytics: {
      historicalAPY: [15.2, 16.8, 17.5, 18.2, 18.5, 18.7],
      dailyVolume: [12345, 13456, 12890, 14567, 14234, 13987],
      timestamp: Date.now()
    },
    poolMetrics: {
      totalRewardsDistributed: 234567.89,
      averageStakeAmount: 2707.34,
      medianStakeAmount: 1250.00,
      topStakerAmount: 250000.00
    },
    riskFactors: {
      riskLevel: 'high',
      liquidityScore: 6.5,
      auditStatus: 'in-progress',
      insuranceCoverage: false
    },
    createdAt: '2024-01-20T00:00:00Z',
    status: 'active'
  }
];

// Simulate database operations with async/await
class PoolModel {
  async findAll() {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 30));
    
    // Use initialized pools or fallback to default
    const currentPools = pools.length > 0 ? pools : defaultPools;
    
    // Return pools with real-time variations
    return currentPools.map(pool => {
      const variation = 1 + (Math.random() * 0.02 - 0.01); // ±1% variation
      return {
        ...pool,
        tvl: parseFloat((pool.tvl * variation).toFixed(2)),
        totalStakers: pool.totalStakers + Math.floor(Math.random() * 10),
        // Update real-time metrics
        analytics: {
          ...pool.analytics,
          timestamp: Date.now()
        }
      };
    });
  }

  async findById(poolId) {
    await new Promise(resolve => setTimeout(resolve, 30));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    return currentPools.find(p => p.id === poolId);
  }

  async findActive() {
    await new Promise(resolve => setTimeout(resolve, 30));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    return currentPools.filter(p => p.status === 'active');
  }
  
  async findByStatus(status) {
    await new Promise(resolve => setTimeout(resolve, 30));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    return currentPools.filter(p => p.status === status);
  }

  async findByToken(symbol) {
    await new Promise(resolve => setTimeout(resolve, 30));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    return currentPools.filter(p => p.token.symbol === symbol);
  }

  async getFeatured() {
    await new Promise(resolve => setTimeout(resolve, 30));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    return currentPools.filter(p => p.featured === true);
  }
}

// Generate complex user staking data
function generateUserStakes(address) {
  // Use generator if available, otherwise fallback to simple data
  try {
    const { generateComplexUserStakes } = require('../data/mockDataGenerator');
    return generateComplexUserStakes(address);
  } catch (error) {
    // Fallback to simple data
    return [
      {
        poolId: 'pool-1',
        stakedAmount: 12.5,
        rewardAmount: 0.45,
        stakedAt: '2024-01-20T10:30:00Z',
        lastClaimed: '2024-01-25T15:20:00Z',
        lockEndDate: '2024-02-20T10:30:00Z',
        transactions: [
          { type: 'stake', amount: 10, timestamp: '2024-01-20T10:30:00Z', txHash: '0xabc123...' },
          { type: 'stake', amount: 2.5, timestamp: '2024-01-22T14:15:00Z', txHash: '0xdef456...' },
          { type: 'claim', amount: 0.45, timestamp: '2024-01-25T15:20:00Z', txHash: '0xghi789...' }
        ]
      },
      {
        poolId: 'pool-2',
        stakedAmount: 5000,
        rewardAmount: 12.34,
        stakedAt: '2024-01-18T09:00:00Z',
        lastClaimed: null,
        lockEndDate: null,
        transactions: [
          { type: 'stake', amount: 5000, timestamp: '2024-01-18T09:00:00Z', txHash: '0xjkl012...' }
        ]
      }
    ];
  }
}

class UserStakeModel {
  async findByAddress(address) {
    await new Promise(resolve => setTimeout(resolve, 40));
    return generateUserStakes(address);
  }

  async getTopStakers(poolId, limit = 10) {
    await new Promise(resolve => setTimeout(resolve, 40));
    const currentPools = pools.length > 0 ? pools : defaultPools;
    const pool = currentPools.find(p => p.id === poolId);
    return pool && pool.topStakers ? pool.topStakers.slice(0, limit) : [];
  }
}

module.exports = {
  PoolModel: new PoolModel(),
  UserStakeModel: new UserStakeModel(),
  initializeData,
  getPools: () => pools.length > 0 ? pools : defaultPools,
  getMockData: () => mockData,
  pools // Export raw data for analytics (for backward compatibility)
};

