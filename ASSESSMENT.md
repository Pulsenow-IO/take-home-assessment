# Smart Contract Assessment Requirements

**Duration:** 30-40 minutes  
**Primary Focus:** Smart Contract Development

## Overview

This assessment evaluates your ability to implement a secure staking pool smart contract. The primary deliverable is a functional `StakingPool.sol` contract with core staking functionality. Frontend integration is optional and may be completed if time permits.

## Smart Contract Requirements

### Core Functionality

Implement `StakingPool.sol` with the following requirements:

**1. Staking Mechanism**
- Enable users to stake ERC-20 tokens
- Track staked amounts per user using a mapping
- Enable users to unstake their tokens

**2. Required Functions**

All three functions must be implemented:

```solidity
function stake(uint256 amount) external nonReentrant
function unstake(uint256 amount) external nonReentrant
function getUserStake(address user) external view returns (uint256)
```

**3. Security Requirements**

- Implement `ReentrancyGuard` on `stake()` and `unstake()` functions
- Validate that `amount > 0` before processing
- Verify sufficient staked balance before allowing unstake
- Use `SafeERC20` for all token transfers (library already imported)

**4. Required State Variables**

```solidity
IERC20 public stakingToken;
mapping(address => uint256) public stakedAmount;
```

### Testing Requirements

Write a minimum of 3 tests covering:

- Successful staking operation
- Successful unstaking operation
- `getUserStake()` returns correct values

**Optional test coverage:**
- Reentrancy protection verification
- Edge cases (zero amount, insufficient balance)

All tests must pass.

## Optional Components

### Frontend Development (Bonus)

If time permits, you may implement a frontend interface with:
- MetaMask wallet connection
- Contract address display
- Token staking interface
- User staked balance display

### Backend API

The backend is provided for reference only and is not required. If implementing the optional frontend, the following endpoint is available:

- `GET /api/pools` - Retrieve pool data for display

## Technical Specifications

### Smart Contract Stack
- Solidity 0.8+
- Hardhat development environment
- OpenZeppelin contracts (recommended for ERC-20 and security utilities)

### Frontend Stack (Optional)
- React 18+
- ethers.js v6 or web3.js
- WalletConnect SDK
- UI library of choice (Material-UI, Tailwind, etc.)
- State management (Context API, Redux, Zustand)

### Backend Stack (Reference Only)
- Node.js with Express
- MVC architecture
- Mock data models provided
- Error handling and request validation middleware

## Implementation Guidelines

### Critical Security Requirements

1. **Reentrancy Protection**: Apply `nonReentrant` modifier to `stake()` and `unstake()` functions
2. **Input Validation**: Verify `amount > 0` before processing transactions
3. **Balance Verification**: Confirm sufficient staked balance before unstaking
4. **Safe Token Transfers**: Use `safeTransfer` and `safeTransferFrom` from SafeERC20

### Implementation Approach

- Use a mapping to track staked amounts: `mapping(address => uint256) public stakedAmount;`
- Initialize staking token address in constructor
- On stake: transfer tokens from user to contract
- On unstake: transfer tokens from contract to user

### Recommended Time Allocation

- 10-15 minutes: Implement required functions
- 10-15 minutes: Write and execute tests
- 5-10 minutes: Manual testing and code refinement
- Remaining time: Optional frontend development

## Assessment Criteria

| Criteria | Weight | Description |
|----------|--------|-------------|
| Smart Contract Functionality | 40% | Correct implementation of staking/unstaking |
| Smart Contract Security | 20% | Reentrancy protection and input validation |
| Frontend Integration | 25% | Wallet connection and staking interface (optional) |
| Code Quality | 10% | Code readability and organization |
| Testing | 5% | Minimum 2-3 passing tests |

**Note:** This assessment evaluates a working prototype. Focus on core functionality over production-ready features.

## Deliverables

### Required

- [ ] `StakingPool.sol` contract compiles without errors
- [ ] `stake(uint256 amount)` function implemented and functional
- [ ] `unstake(uint256 amount)` function implemented and functional
- [ ] `getUserStake(address user)` function implemented and functional
- [ ] `ReentrancyGuard` implemented on stake/unstake functions
- [ ] Minimum 3 tests written and passing
- [ ] Tests verify stake/unstake functionality

### Optional

- [ ] Frontend UI for staking operations
- [ ] Additional test coverage
- [ ] Enhanced security features
- [ ] Code documentation and comments