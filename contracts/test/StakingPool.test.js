const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StakingPool", function () {
  let stakingToken, rewardToken, stakingPool;
  let owner, user1, user2;

  const REWARD_RATE = ethers.parseEther("0.125"); // 12.5% per year
  const INITIAL_SUPPLY = ethers.parseEther("1000000");

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy mock ERC20 tokens
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    stakingToken = await MockERC20.deploy(
      "Staking Token",
      "STK",
      18,
      INITIAL_SUPPLY
    );
    rewardToken = await MockERC20.deploy(
      "Reward Token",
      "RWD",
      18,
      INITIAL_SUPPLY
    );

    // Deploy StakingPool
    const StakingPool = await ethers.getContractFactory("StakingPool");
    stakingPool = await StakingPool.deploy(
      await stakingToken.getAddress(),
      await rewardToken.getAddress(),
      REWARD_RATE
    );

    // Transfer tokens to users for testing
    await stakingToken.transfer(user1.address, ethers.parseEther("1000"));
    await stakingToken.transfer(user2.address, ethers.parseEther("1000"));

    // Fund the staking pool with reward tokens
    await rewardToken.transfer(await stakingPool.getAddress(), ethers.parseEther("100000"));
  });

  describe("Deployment", function () {
    it("Should set the correct staking token", async function () {
      // TODO: Test that staking token is set correctly
    });

    it("Should set the correct reward token", async function () {
      // TODO: Test that reward token is set correctly
    });

    it("Should set the correct reward rate", async function () {
      // TODO: Test that reward rate is set correctly
    });
  });

  describe("Staking", function () {
    it("Should allow users to stake tokens", async function () {
      // TODO: Test successful staking
      // 1. Approve tokens
      // 2. Call stake function
      // 3. Check user's staked amount increased
      // 4. Check tokens transferred to contract
    });

    it("Should revert when staking zero amount", async function () {
      // TODO: Test that staking zero amount reverts
    });

    it("Should revert when user has insufficient balance", async function () {
      // TODO: Test that staking more than balance reverts
    });

    it("Should update pending rewards when staking", async function () {
      // TODO: Test that staking updates reward calculations correctly
    });
  });

  describe("Unstaking", function () {
    beforeEach(async function () {
      // Setup: User stakes some tokens first
      // TODO: Add stake setup
    });

    it("Should allow users to unstake tokens", async function () {
      // TODO: Test successful unstaking
      // 1. Call unstake function
      // 2. Check user's staked amount decreased
      // 3. Check tokens transferred back to user
    });

    it("Should revert when unstaking more than staked", async function () {
      // TODO: Test that unstaking more than staked reverts
    });

    it("Should revert when unstaking zero amount", async function () {
      // TODO: Test that unstaking zero amount reverts
    });
  });

  describe("Rewards", function () {
    beforeEach(async function () {
      // Setup: User stakes tokens
      // TODO: Add stake setup
    });

    it("Should calculate pending rewards correctly", async function () {
      // TODO: Test reward calculation
      // 1. Stake tokens
      // 2. Increase time (use ethers.provider.send("evm_increaseTime"))
      // 3. Check pending rewards match expected calculation
      // Formula: (stakedAmount * rewardRate * timeElapsed) / (365 * 24 * 3600)
    });

    it("Should allow users to claim rewards", async function () {
      // TODO: Test reward claiming
      // 1. Stake tokens
      // 2. Advance time
      // 3. Claim rewards
      // 4. Check rewards transferred to user
      // 5. Check pending rewards reset
    });

    it("Should update rewards when staking more tokens", async function () {
      // TODO: Test that adding more stake updates rewards correctly
    });

    it("Should not give rewards for zero staked amount", async function () {
      // TODO: Test that users with zero stake have zero rewards
    });
  });

  describe("Multiple Users", function () {
    it("Should handle multiple users staking simultaneously", async function () {
      // TODO: Test multiple users can stake independently
      // 1. User1 stakes
      // 2. User2 stakes
      // 3. Advance time
      // 4. Verify each user's rewards are calculated independently
    });
  });

  describe("Security", function () {
    it("Should prevent reentrancy attacks", async function () {
      // TODO: Test reentrancy protection
      // This is important - consider using ReentrancyGuard
    });

    it("Should handle zero-address checks", async function () {
      // TODO: Test that functions handle zero addresses appropriately
    });
  });
});

