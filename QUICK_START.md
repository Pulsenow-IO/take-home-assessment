# Quick Start Guide (30-40 Minute Assessment)

## Setup (5 minutes)

```bash
cd contracts
npm install
npx hardhat compile
```

## Your Task (30-35 minutes)

### Step 1: Implement Contract (15-20 min)

Open `contracts/contracts/StakingPool.sol` and implement:

1. **Add state variables**:
   ```solidity
   IERC20 public stakingToken;
   mapping(address => uint256) public stakedAmount;
   ```

2. **Complete constructor**:
   ```solidity
   constructor(address _stakingToken, address _rewardToken, uint256 _rewardRate) Ownable(msg.sender) {
       stakingToken = IERC20(_stakingToken);
       // Note: _rewardToken and _rewardRate are for future use, ignore for now
   }
   ```

3. **Implement `stake(uint256 amount)`**:
   - Check amount > 0
   - Transfer tokens from user to contract
   - Update stakedAmount mapping
   - Use `nonReentrant` modifier

4. **Implement `unstake(uint256 amount)`**:
   - Check amount > 0
   - Check user has enough staked
   - Update stakedAmount mapping
   - Transfer tokens from contract to user
   - Use `nonReentrant` modifier

5. **Implement `getUserStake(address user)`**:
   - Return stakedAmount[user]

### Step 2: Write Tests (10-15 min)

Open `contracts/test/StakingPool.test.js` and complete:

- Test staking works
- Test unstaking works  
- Test getUserStake returns correct value

Run: `npx hardhat test`

### Step 3: Verify (5 min)

- All tests pass ✅
- Contract compiles ✅
- Code is readable ✅

## What's Required

✅ Contract with 3 functions working
✅ Tests passing
✅ ReentrancyGuard used

## What's Optional (Bonus)

⭐ Frontend UI
⭐ More tests
⭐ Deploy to testnet

**Focus on the contract - that's what matters!**

Good luck! 🚀
