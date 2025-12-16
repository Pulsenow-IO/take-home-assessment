# Setup Instructions

Follow these steps to set up and run the assessment project.

## Prerequisites

- **Node.js** 16+ and npm/yarn
- **MetaMask** browser extension installed
- Basic familiarity with terminal/command line

## Step-by-Step Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Start Backend Server

```bash
npm run dev
```

The backend should now be running on `http://localhost:3001`. You can test it by visiting `http://localhost:3001/health` in your browser.

**Keep this terminal window open!**

### 3. Install Smart Contract Dependencies

Open a **new terminal window** and run:

```bash
cd contracts
npm install
```

### 4. Compile Smart Contracts

```bash
npx hardhat compile
```

### 5. (Optional) Start Local Hardhat Node

If you want to test contracts locally:

```bash
npx hardhat node
```

This will start a local blockchain network. Keep this running if you use it.

### 6. Install Frontend Dependencies

Open a **new terminal window** and run:

```bash
cd frontend
npm install
```

### 7. Start Frontend Development Server

```bash
npm start
```

The frontend should open automatically in your browser at `http://localhost:3000`.

## Verifying the Setup

1. **Backend**: Visit `http://localhost:3001/api/pools` - you should see JSON data with staking pools.

2. **Frontend**: You should see the staking platform UI with a "Connect Wallet" button.

3. **Smart Contracts**: Run `npx hardhat test` in the contracts directory (tests will fail until you implement the contract - that's expected!).

## Common Issues

### Port Already in Use

If port 3000 or 3001 is already in use:
- **Frontend**: Set `PORT=3002` before running `npm start`
- **Backend**: Change `PORT` in `backend/server.js`

### MetaMask Not Detected

- Make sure MetaMask extension is installed and enabled
- Try refreshing the page after installing MetaMask

### CORS Errors

The backend should already have CORS enabled. If you see CORS errors:
- Make sure backend is running on port 3001
- Check that `frontend/.env` has `REACT_APP_API_URL=http://localhost:3001`

## Next Steps

1. Read `ASSESSMENT.md` for detailed requirements
2. Start implementing the `StakingPool.sol` contract
3. Write and pass all tests
4. Integrate the contract with the frontend
5. Connect MetaMask and test the full flow

Good luck! 🚀

