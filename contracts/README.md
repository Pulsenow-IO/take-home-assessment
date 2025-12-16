# Smart Contracts

This directory contains the Solidity smart contracts for the staking platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Compile contracts:
```bash
npx hardhat compile
```

3. Run tests:
```bash
npx hardhat test
```

4. Deploy to local Hardhat network:
```bash
npx hardhat node
# In another terminal:
npx hardhat run scripts/deploy.js --network localhost
```

## Contract Overview

### MockERC20.sol
A simple ERC20 token for testing. This is provided for you to use in your tests and local development.

### StakingPool.sol
**TODO: Implement this contract**

This is the main contract you need to implement. It should:
- Allow users to stake ERC20 tokens
- Calculate and distribute rewards based on staking time
- Allow users to unstake and claim rewards
- Be secure against common vulnerabilities

See `ASSESSMENT.md` for detailed requirements.

## Testing

The test file `test/StakingPool.test.js` contains test cases that you should make pass. Some tests are scaffolded for you - complete them to verify your implementation.

## Deployment

After implementing the contract, you can deploy it to a testnet:

1. Create a `.env` file with your private key and RPC URL:
```
PRIVATE_KEY=your_private_key_here
RPC_URL=https://sepolia.infura.io/v3/your_project_id
```

2. Update `hardhat.config.js` with the testnet configuration

3. Deploy:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Security Considerations

Make sure your implementation:
- ✅ Uses `ReentrancyGuard` to prevent reentrancy attacks
- ✅ Uses `SafeERC20` for token transfers
- ✅ Handles overflow/underflow (Solidity 0.8+ does this automatically)
- ✅ Has proper access controls
- ✅ Validates input parameters
- ✅ Handles edge cases (zero amounts, insufficient balance, etc.)

