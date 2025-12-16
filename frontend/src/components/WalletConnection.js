import React, { useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';

const WalletConnection = () => {
  const { account, balance, isConnecting, connectMetaMask, connectWalletConnect, disconnect, isConnected } = useWallet();
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleConnect = async (type) => {
    setError(null);
    try {
      if (type === 'metamask') {
        await connectMetaMask();
      } else if (type === 'walletconnect') {
        await connectWalletConnect();
      }
      setDialogOpen(false);
    } catch (err) {
      setError(err.message || 'Failed to connect wallet');
      console.error('Wallet connection error:', err);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setError(null);
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip 
          label={`${formatAddress(account)}`}
          color="secondary"
          variant="outlined"
        />
        {balance && (
          <Typography variant="body2" sx={{ color: 'white' }}>
            {parseFloat(balance).toFixed(4)} ETH
          </Typography>
        )}
        <Button 
          color="inherit" 
          onClick={handleDisconnect}
          variant="outlined"
          size="small"
        >
          Disconnect
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Button 
        color="inherit" 
        onClick={() => setDialogOpen(true)}
        variant="outlined"
      >
        Connect Wallet
      </Button>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Connect Wallet</DialogTitle>
        <DialogContent>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 }}>
            <Button
              variant="outlined"
              onClick={() => handleConnect('metamask')}
              disabled={isConnecting}
              size="large"
            >
              {isConnecting ? <CircularProgress size={24} /> : 'MetaMask'}
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleConnect('walletconnect')}
              disabled={isConnecting}
              size="large"
            >
              WalletConnect
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WalletConnection;

