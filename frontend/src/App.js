import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import WalletConnection from './components/WalletConnection';
import StakingPools from './components/StakingPools';
import { WalletProvider } from './contexts/WalletContext';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Staking Platform Assessment
              </Typography>
              <WalletConnection />
            </Toolbar>
          </AppBar>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Staking Pools
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Connect your wallet to view and interact with staking pools.
          </Typography>
          <StakingPools />
        </Container>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default App;

