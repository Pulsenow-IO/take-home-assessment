# Web3 Developer Take-Home Assessment

## Overview

This is a **focused smart contract development assessment**. You'll implement a basic **Token Staking Pool** smart contract with core staking functionality.

**Time Estimate:** 30-40 minutes

**Focus:** Smart contract development and security

## What You'll Build

A **Staking Pool Smart Contract** that allows:
1. Users to stake ERC-20 tokens
2. Users to unstake their tokens
3. Track staked amounts per user
4. Basic security protection

**Frontend is optional** - focus on the smart contract!

## Project Structure

```
├── contracts/         # Solidity smart contracts (Hardhat) - MAIN FOCUS
├── frontend/          # React application (OPTIONAL)
├── backend/           # Node.js API (OPTIONAL - for frontend)
├── ASSESSMENT.md      # Detailed requirements
└── README.md          # This file
```

## Getting Started

### Setup Instructions

1. **Smart Contracts Setup (Required):**
   ```bash
   cd contracts
   npm install
   npx hardhat compile
   npx hardhat test
   ```

2. **Backend Setup (Optional - for frontend testing):**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Only needed if you want to build the frontend

3. **Frontend Setup (Optional):**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend is completely optional - focus on smart contracts!

## Assessment Tasks

### Task 1: Smart Contract Development (100% - Required)
**Core Functions (All Required):**
- ✅ `stake(uint256 amount)` - Allow users to stake tokens
- ✅ `unstake(uint256 amount)` - Allow users to unstake their tokens
- ✅ `getUserStake(address user)` - Get user's staked amount
- ✅ Use `ReentrancyGuard` for security
- ✅ Write at least 3 basic tests that pass

### Task 2: Frontend Development (Optional - Bonus)
- Connect MetaMask wallet
- Display staking pools (if you want to use backend)
- Allow users to stake tokens via UI
- This is completely optional - only do if you have extra time

## What We're Looking For

✅ **Smart Contract Functionality**: `stake()` and `unstake()` functions work correctly
✅ **Security**: Uses `ReentrancyGuard` to prevent reentrancy attacks
✅ **Tests**: At least 3 tests pass (stake, unstake, getUserStake)
✅ **Code Quality**: Code is readable and well-structured
✅ **Working Contract**: Contract compiles and tests pass

**Note:** Focus entirely on the smart contract. Frontend is optional bonus work!

## Submission

Please submit:
1. Your codebase (zip or git repository link)
2. Brief notes on:
   - What works
   - What didn't work / challenges (if any)
   - What you'd add with more time (optional)

**Note:** We're evaluating your smart contract development skills. Don't worry about frontend unless you have extra time.

## Questions?

Feel free to ask clarifying questions. We're evaluating your problem-solving process, not tricking you with unclear requirements.

Good luck! 🚀
