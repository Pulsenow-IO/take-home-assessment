import React, { useState, useEffect } from 'react';
import { useWallet } from '../contexts/WalletContext';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import StakingModal from './StakingModal';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const StakingPools = () => {
  const { isConnected } = useWallet();
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPool, setSelectedPool] = useState(null);
  const [modalAction, setModalAction] = useState('stake');

  useEffect(() => {
    fetchPools();
    // Refresh pools every 30 seconds
    const interval = setInterval(fetchPools, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchPools = async () => {
    try {
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/api/pools`);
      setPools(response.data.data || []);
    } catch (err) {
      setError('Failed to fetch staking pools. Make sure the backend is running.');
      console.error('Error fetching pools:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStake = (pool) => {
    setSelectedPool(pool);
    setModalAction('stake');
    setModalOpen(true);
  };

  const handleUnstake = (pool) => {
    setSelectedPool(pool);
    setModalAction('unstake');
    setModalOpen(true);
  };

  const handleClaim = (pool) => {
    setSelectedPool(pool);
    setModalAction('claim');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPool(null);
    // Refresh pools data after transaction
    fetchPools();
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  if (!isConnected) {
    return (
      <Alert severity="info" sx={{ mt: 2 }}>
        Please connect your wallet to view and interact with staking pools.
      </Alert>
    );
  }

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {pools.map((pool) => (
            <Grid item xs={12} md={6} lg={4} key={pool.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {pool.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pool.description}
                  </Typography>
                  
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography variant="body2">
                      <strong>Token:</strong> {pool.token.symbol}
                    </Typography>
                    <Typography variant="body2">
                      <strong>APY:</strong> {pool.apy}%
                    </Typography>
                    <Typography variant="body2">
                      <strong>TVL:</strong> ${pool.tvl.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Total Stakers:</strong> {pool.totalStakers.toLocaleString()}
                    </Typography>
                    {pool.lockPeriod > 0 && (
                      <Typography variant="body2">
                        <strong>Lock Period:</strong> {pool.lockPeriod} days
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      Risk Level: {pool.riskFactors.riskLevel}
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={pool.riskFactors.liquidityScore * 10} 
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button 
                    size="small" 
                    variant="contained"
                    onClick={() => handleStake(pool)}
                  >
                    Stake
                  </Button>
                  <Button 
                    size="small" 
                    variant="outlined"
                    onClick={() => handleUnstake(pool)}
                  >
                    Unstake
                  </Button>
                  <Button 
                    size="small" 
                    variant="outlined"
                    onClick={() => handleClaim(pool)}
                  >
                    Claim
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <StakingModal
        open={modalOpen}
        onClose={handleCloseModal}
        pool={selectedPool}
        action={modalAction}
      />
    </>
  );
};

export default StakingPools;

