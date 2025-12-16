# Evaluation Criteria (Simplified)

This document outlines how submissions will be evaluated for the simplified assessment.

## Overall Assessment Breakdown (30-40 Minute Assessment)

| Category | Weight | What We're Looking For |
|----------|--------|------------------------|
| **Smart Contract Functionality** | 50% | All 3 functions work (stake, unstake, getUserStake) |
| **Smart Contract Security** | 30% | ReentrancyGuard used, proper validation |
| **Testing** | 15% | At least 3 tests pass |
| **Code Quality** | 5% | Code is readable and organized |

**Frontend: Optional bonus (not counted in score)**

**Note:** This is a focused smart contract assessment. Frontend is completely optional.

## Detailed Evaluation

### Smart Contract Functionality (50%)

**Excellent (90-100%)**
- ✅ Stake function works correctly
- ✅ Unstake function works correctly
- ✅ getUserStake returns correct values
- ✅ Handles basic edge cases (zero amounts, insufficient balance)

**Good (70-89%)**
- Core functions work but may have minor issues
- Some edge cases not handled perfectly
- Functionality is mostly correct

**Needs Improvement (<70%)**
- Functions don't work
- Major bugs preventing staking/unstaking
- Can't interact with contract

### Smart Contract Security (30%)

**Excellent (90-100%)**
- ✅ Uses ReentrancyGuard on stake/unstake
- ✅ Validates input amounts (no zero)
- ✅ No obvious reentrancy vulnerabilities
- ✅ Safe token transfers

**Good (70-89%)**
- Uses ReentrancyGuard
- Some validation missing
- Generally safe but could improve

**Needs Improvement (<70%)**
- No ReentrancyGuard
- Vulnerable to reentrancy attacks
- No input validation
- Unsafe token handling

### Testing (15%)

**Excellent (90-100%)**
- ✅ MetaMask connection works smoothly
- ✅ Can stake tokens via UI
- ✅ Shows user's staked balance
- ✅ Basic error handling
- ✅ Loading states during transactions

**Good (70-89%)**
- Wallet connects but some issues
- Staking works but UI could be better
- Missing some error handling

**Needs Improvement (<70%)**
- Wallet connection broken
- Can't stake via UI
- No error handling
- Poor user experience

### Code Quality (5%)

**Excellent (90-100%)**
- Code is clean and readable
- Well-organized structure
- Clear function names
- Logical code flow

**Good (70-89%)**
- Generally readable
- Some organization issues
- Could be improved

**Needs Improvement (<70%)**
- Hard to read
- Poor structure
- Unclear code
- No organization


## What We're NOT Looking For

❌ Frontend UI (completely optional - focus on contract)
❌ Backend integration (not required)
❌ Reward calculations (not needed for this assessment)
❌ Deployment to testnet (Hardhat local testing is fine)
❌ Production-ready code (working contract with tests is enough)
❌ Complex features (stick to the 3 required functions)

## Red Flags

These would significantly impact evaluation:

- ⚠️ Code that doesn't compile
- ⚠️ No ReentrancyGuard (major security issue - automatic fail)
- ⚠️ Can't stake/unstake (functions don't work)
- ⚠️ No tests written
- ⚠️ Tests don't pass

## Submission Tips (30-40 Minute Assessment)

1. **Time Management**: 
   - 15-20 min: Implement the 3 functions
   - 10-15 min: Write tests
   - 5 min: Verify everything works

2. **Must Have**:
   - All 3 functions implemented
   - ReentrancyGuard on stake/unstake (CRITICAL)
   - At least 3 tests passing

3. **Don't Worry About**:
   - Frontend (completely optional)
   - Reward calculations
   - Complex features

4. **Priority Order**:
   1. Get stake() working
   2. Get unstake() working
   3. Get getUserStake() working
   4. Write tests
   5. (Optional) Build frontend if time permits

**Remember:** This is a focused smart contract assessment. Contract + tests = done!

## Questions to Answer (Optional - Brief Notes)

1. What works in your solution?
2. What didn't work or was challenging?
3. What would you add/improve with more time? (optional)

**Note:** Keep it brief. We're more interested in working code than long explanations!
