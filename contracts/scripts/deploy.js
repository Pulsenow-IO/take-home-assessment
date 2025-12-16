const hre = require("hardhat");

async function main() {
  console.log("Deploying contracts...");

  // Deploy mock tokens
  const MockERC20 = await hre.ethers.getContractFactory("MockERC20");
  
  const stakingToken = await MockERC20.deploy(
    "Staking Token",
    "STK",
    18,
    hre.ethers.parseEther("1000000")
  );
  await stakingToken.waitForDeployment();
  console.log("Staking Token deployed to:", await stakingToken.getAddress());

  const rewardToken = await MockERC20.deploy(
    "Reward Token",
    "RWD",
    18,
    hre.ethers.parseEther("1000000")
  );
  await rewardToken.waitForDeployment();
  console.log("Reward Token deployed to:", await rewardToken.getAddress());

  // Deploy StakingPool
  const StakingPool = await hre.ethers.getContractFactory("StakingPool");
  const rewardRate = hre.ethers.parseEther("0.125"); // 12.5% per year
  
  const stakingPool = await StakingPool.deploy(
    await stakingToken.getAddress(),
    await rewardToken.getAddress(),
    rewardRate
  );
  await stakingPool.waitForDeployment();
  console.log("StakingPool deployed to:", await stakingPool.getAddress());

  // Fund the staking pool with reward tokens
  const [deployer] = await hre.ethers.getSigners();
  const fundAmount = hre.ethers.parseEther("100000");
  await rewardToken.transfer(await stakingPool.getAddress(), fundAmount);
  console.log(`Funded staking pool with ${hre.ethers.formatEther(fundAmount)} reward tokens`);

  console.log("\n=== Deployment Summary ===");
  console.log("Network:", hre.network.name);
  console.log("Deployer:", deployer.address);
  console.log("Staking Token:", await stakingToken.getAddress());
  console.log("Reward Token:", await rewardToken.getAddress());
  console.log("Staking Pool:", await stakingPool.getAddress());
  console.log("Reward Rate:", hre.ethers.formatEther(rewardRate) * 100, "%");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

