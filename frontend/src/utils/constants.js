// Contract addresses and ABI will go here after deployment
export const CONTRACT_ADDRESSES = {
  STAKING_POOL: process.env.REACT_APP_STAKING_POOL_ADDRESS || '',
  STAKING_TOKEN: process.env.REACT_APP_STAKING_TOKEN_ADDRESS || '',
  REWARD_TOKEN: process.env.REACT_APP_REWARD_TOKEN_ADDRESS || '',
};

export const NETWORKS = {
  1: 'Ethereum Mainnet',
  5: 'Goerli',
  11155111: 'Sepolia',
  1337: 'Hardhat Local',
};

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

