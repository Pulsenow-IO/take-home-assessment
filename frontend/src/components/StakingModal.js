import React, { useState, useEffect } from 'react';
import { useWallet } from '../contexts/WalletContext';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { ethers } from 'ethers';

const StakingModal = ({ open, onClose, pool, action = 'stake' }) => {
  const { provider, signer, account } = useWallet();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);
  const [stakedAmount, setStakedAmount] = useState(null);
  const [pendingRewards, setPendingRewards] = useState(null);

  useEffect(() => {
    if (open && account && pool) {
      fetchUserData();
    }
  }, [open, account, pool]);

  const fetchUserData = async () => {
    // TODO: Implement fetching user's token balance, staked amount, and pending rewards
    // This will require:
    // 1. Getting token balance from ERC20 contract
    // 2. Getting staked amount from StakingPool contract
    // 3. Getting pending rewards from StakingPool contract
    
    // Example structure:
    // if (provider && pool.token.address) {
    //   const tokenContract = new ethers.Contract(pool.token.address, ERC20_ABI, provider);
    //   const balance = await tokenContract.balanceOf(account);
    //   setTokenBalance(ethers.formatUnits(balance, pool.token.decimals));
    // }
    
    // Placeholder
    setTokenBalance('0');
    setStakedAmount('0');
    setPendingRewards('0');
  };

  const handleMax = () => {
    if (action === 'stake') {
      setAmount(tokenBalance || '0');
    } else if (action === 'unstake') {
      setAmount(stakedAmount || '0');
    }
  };

  const handleSubmit = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (!signer) {
      setError('Wallet not connected');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // TODO: Implement transaction logic
      // Example structure:
      
      // 1. Get contract instance
      // const stakingPoolContract = new ethers.Contract(
      //   CONTRACT_ADDRESSES.STAKING_POOL,
      //   STAKING_POOL_ABI,
      //   signer
      // );
      
      // 2. For staking: Approve tokens first, then stake
      // if (action === 'stake') {
      //   const tokenContract = new ethers.Contract(pool.token.address, ERC20_ABI, signer);
      //   const amountWei = ethers.parseUnits(amount, pool.token.decimals);
      //   const approveTx = await tokenContract.approve(CONTRACT_ADDRESSES.STAKING_POOL, amountWei);
      //   await approveTx.wait();
      //   const stakeTx = await stakingPoolContract.stake(amountWei);
      //   await stakeTx.wait();
      // }
      
      // 3. For unstaking: Call unstake function
      // if (action === 'unstake') {
      //   const amountWei = ethers.parseUnits(amount, pool.token.decimals);
      //   const unstakeTx = await stakingPoolContract.unstake(amountWei);
      //   await unstakeTx.wait();
      // }
      
      // 4. For claiming: Call claimRewards function
      // if (action === 'claim') {
      //   const claimTx = await stakingPoolContract.claimRewards();
      //   await claimTx.wait();
      // }
      
      // 5. Show success message
      // setSuccess(`Transaction successful!`);
      // setTimeout(() => {
      //   onClose();
      //   fetchUserData(); // Refresh data
      // }, 2000);
      
      // Placeholder for now
      alert(`${action} functionality - to be implemented with contract integration`);
      
    } catch (err) {
      console.error('Transaction error:', err);
      setError(err.message || 'Transaction failed');
    } finally {
      setLoading(false);
    }
  };

  const actionLabels = {
    stake: 'Stake',
    unstake: 'Unstake',
    claim: 'Claim Rewards'
  };

  const actionDescriptions = {
    stake: 'Stake tokens to earn rewards',
    unstake: 'Unstake your tokens from the pool',
    claim: 'Claim your pending rewards'
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{actionLabels[action]} {pool?.token?.symbol}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" paragraph>
          {actionDescriptions[action]}
        </Typography>

        {action === 'stake' && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Available Balance: {tokenBalance || '0'} {pool?.token?.symbol}
            </Typography>
          </Box>
        )}

        {action === 'unstake' && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Staked Amount: {stakedAmount || '0'} {pool?.token?.symbol}
            </Typography>
          </Box>
        )}

        {action === 'claim' && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Pending Rewards: {pendingRewards || '0'} {pool?.rewardToken?.symbol}
            </Typography>
          </Box>
        )}

        {action !== 'claim' && (
          <TextField
            fullWidth
            label={`Amount (${pool?.token?.symbol})`}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <Button size="small" onClick={handleMax}>
                  MAX
                </Button>
              )
            }}
          />
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {success}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={loading || (action !== 'claim' && !amount)}
        >
          {loading ? <CircularProgress size={24} /> : actionLabels[action]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StakingModal;

