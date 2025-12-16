# Project Structure

```
Pulsenow-blockchain-web3/
│
├── README.md                 # Main assessment overview
├── ASSESSMENT.md             # Detailed requirements
├── SETUP.md                  # Setup instructions
├── EVALUATION.md             # Evaluation criteria
├── PROJECT_STRUCTURE.md      # This file
│
├── backend/                  # Node.js Backend API (MVC Architecture)
│   ├── controllers/         # Request handlers
│   │   ├── poolController.js
│   │   ├── analyticsController.js
│   │   └── userController.js
│   ├── routes/              # API route definitions
│   │   ├── poolRoutes.js
│   │   ├── analyticsRoutes.js
│   │   ├── userRoutes.js
│   │   └── index.js
│   ├── middleware/          # Express middleware
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── validator.js
│   ├── models/              # Data models (mock data)
│   │   └── poolModel.js
│   ├── utils/               # Utility functions
│   │   └── errors.js
│   ├── server.js            # Application entry point
│   ├── package.json
│   ├── README.md
│   └── BACKEND_TASK.md      # Backend development guide
│
├── frontend/                 # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── WalletConnection.js
│   │   │   ├── StakingPools.js
│   │   │   └── StakingModal.js
│   │   ├── contexts/
│   │   │   └── WalletContext.js
│   │   └── utils/
│   │       └── constants.js
│   ├── package.json
│   └── .gitignore
│
└── contracts/                # Smart Contracts (Hardhat)
    ├── contracts/
    │   ├── StakingPool.sol           # TODO: Implement this
    │   └── MockERC20.sol
    ├── test/
    │   └── StakingPool.test.js
    ├── scripts/
    │   └── deploy.js
    ├── hardhat.config.js
    ├── package.json
    └── README.md
```

## Backend Architecture (MVC Pattern)

### Request Flow
```
Client Request
    ↓
server.js (Entry point)
    ↓
Middleware Chain (CORS, JSON parsing, logging, validation)
    ↓
Routes (Route matching)
    ↓
Controller (Business logic)
    ↓
Model (Data access)
    ↓
Response (JSON)
```

### Key Components

**Controllers** - Handle business logic:
- `poolController.js` - Pool CRUD operations
- `analyticsController.js` - Analytics calculations
- `userController.js` - User data operations

**Routes** - Define API endpoints:
- Organized by resource (pools, analytics, users)
- Apply middleware (validation)
- Link to controllers

**Middleware** - Cross-cutting concerns:
- `errorHandler.js` - Global error handling
- `logger.js` - Request/response logging
- `validator.js` - Input validation

**Models** - Data layer:
- Mock data storage
- Database simulation
- Async operations

## Key Files to Review

### For Candidates:
1. **ASSESSMENT.md** - Start here for detailed requirements
2. **SETUP.md** - Follow this to get started
3. **backend/BACKEND_TASK.md** - Backend development guide
4. **contracts/contracts/StakingPool.sol** - Main contract to implement
5. **contracts/test/StakingPool.test.js** - Tests to make pass
6. **frontend/src/components/StakingModal.js** - Connect contract interactions here

### For Evaluators:
1. **EVALUATION.md** - How to evaluate submissions
2. **backend/README.md** - Backend architecture explanation
3. **contracts/contracts/StakingPool.sol** - Check implementation quality

## Implementation Order (Recommended)

1. ✅ Setup project (follow SETUP.md)
2. ✅ Understand backend architecture (read backend/BACKEND_TASK.md)
3. ✅ Implement `StakingPool.sol` contract
4. ✅ Write and pass all tests
5. ✅ Deploy contract to testnet or local node
6. ✅ Integrate contract with frontend (StakingModal.js)
7. ✅ Integrate frontend with backend API
8. ✅ Test full flow: Connect wallet → Stake → Claim → Unstake
9. ✅ Write submission summary

## What's Provided vs. What's Needed

### ✅ Provided:
- Complete backend with MVC architecture
- Backend API with complex mock data
- Frontend UI structure and wallet connection
- Smart contract skeleton and test framework
- Mock ERC20 tokens for testing
- Deployment scripts

### ❌ Needs Implementation:
- Complete `StakingPool.sol` contract
- Smart contract tests (framework provided)
- Frontend contract integration
- Frontend-backend API integration
- WalletConnect implementation (optional)
