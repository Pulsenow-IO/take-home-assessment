// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title StakingPool
 * @dev TODO: Implement this basic staking pool contract
 * 
 * Required Functions:
 * - stake(uint256 amount): Stake tokens (REQUIRED)
 * - unstake(uint256 amount): Unstake tokens (REQUIRED)
 * - getUserStake(address user): Get user's staked amount (REQUIRED)
 * 
 * Optional Functions (Bonus):
 * - claimRewards(): Claim rewards (if you implement rewards)
 * - getPendingRewards(address user): Calculate pending rewards
 * 
 * Security Requirements:
 * - Use ReentrancyGuard for stake/unstake functions (REQUIRED)
 * - Validate input amounts (don't allow zero)
 * - Check user has enough balance before unstaking
 */
contract StakingPool is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    // TODO: Add your state variables here
    // Hint: You'll need to track:
    // - The staking token
    // - The reward token
    // - User staking data (amount, last update time, etc.)
    // - Reward rate
    
    // Placeholder constructor - implement this
    constructor(address _stakingToken, address _rewardToken, uint256 _rewardRate) Ownable(msg.sender) {
        // TODO: Initialize your contract
    }

    // TODO: Implement stake function
    function stake(uint256 amount) external nonReentrant {
        // Implement staking logic
        // - Transfer tokens from user
        // - Update user's staked amount
        // - Update reward calculations
        revert("Not implemented");
    }

    // TODO: Implement unstake function
    function unstake(uint256 amount) external nonReentrant {
        // Implement unstaking logic
        // - Verify user has enough staked
        // - Update user's staked amount
        // - Transfer tokens back to user
        // - Update reward calculations
        revert("Not implemented");
    }

    // TODO: Implement claimRewards function
    function claimRewards() external nonReentrant {
        // Implement reward claiming logic
        // - Calculate pending rewards
        // - Transfer rewards to user
        // - Update last reward claim time
        revert("Not implemented");
    }

    // TODO: Implement getUserStake function
    function getUserStake(address user) external view returns (uint256) {
        // Return user's staked amount
        revert("Not implemented");
    }

    // TODO: Implement getPendingRewards function
    function getPendingRewards(address user) external view returns (uint256) {
        // Calculate and return pending rewards
        // Formula: (stakedAmount * rewardRate * timeElapsed) / 365 days
        revert("Not implemented");
    }

    // Optional: Add admin functions to update reward rate, deposit rewards, etc.
}

