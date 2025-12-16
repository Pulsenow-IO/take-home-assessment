// Request validation middleware

const validateEthereumAddress = (req, res, next) => {
  const { address } = req.params;
  
  if (!address) {
    return res.status(400).json({
      success: false,
      error: 'Address parameter is required'
    });
  }

  // Basic Ethereum address validation
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid Ethereum address format'
    });
  }

  next();
};

const validatePoolId = (req, res, next) => {
  const { poolId } = req.params;
  
  if (!poolId) {
    return res.status(400).json({
      success: false,
      error: 'Pool ID parameter is required'
    });
  }

  next();
};

module.exports = {
  validateEthereumAddress,
  validatePoolId
};

