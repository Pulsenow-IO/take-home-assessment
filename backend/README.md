# Backend API

Node.js/Express backend with proper MVC architecture for the staking platform assessment.

## Architecture

The backend follows a clean architecture pattern:

```
backend/
├── controllers/       # Request handlers (business logic)
├── routes/           # API route definitions
├── middleware/       # Express middleware (validation, logging, error handling)
├── models/           # Data models (mock data layer)
├── utils/            # Utility functions and helpers
└── server.js         # Application entry point
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Pools
- `GET /api/pools` - Get all staking pools
- `GET /api/pools?status=active` - Get active pools only
- `GET /api/pools/:poolId` - Get specific pool details

### Analytics
- `GET /api/pools/:poolId/analytics` - Get pool analytics (time-series data)
- `GET /api/pools/:poolId/analytics?days=30` - Get analytics for specific period
- `GET /api/analytics` - Get overall platform analytics

### User
- `GET /api/user/:address/stakes` - Get user's staking positions
- `GET /api/user/:address/history` - Get user's transaction history

## Structure Details

### Controllers
Handle business logic and coordinate between routes and models:
- `poolController.js` - Pool-related operations
- `analyticsController.js` - Analytics and reporting
- `userController.js` - User-specific data

### Routes
Define API endpoints and link them to controllers:
- `poolRoutes.js` - Pool endpoints
- `analyticsRoutes.js` - Analytics endpoints
- `userRoutes.js` - User endpoints
- `index.js` - Main router that combines all routes

### Middleware
- `errorHandler.js` - Global error handling
- `logger.js` - Request logging
- `validator.js` - Input validation (address format, pool ID, etc.)

### Models
Mock data layer that simulates database operations:
- `poolModel.js` - Pool data and operations
- User stake data generation

## Key Features

✅ **Proper MVC Architecture** - Separation of concerns
✅ **Middleware Chain** - Request validation, logging, error handling
✅ **Error Handling** - Centralized error management
✅ **Input Validation** - Ethereum address format, parameter validation
✅ **Request Logging** - Track all API requests
✅ **Async/Await** - Modern asynchronous code patterns
✅ **Complex Mock Data** - Realistic data structures for testing

## Development Notes

This is a mock backend for assessment purposes. In production, you would:
- Connect to a real database (PostgreSQL, MongoDB, etc.)
- Implement authentication/authorization
- Add rate limiting
- Implement caching
- Add comprehensive logging
- Set up monitoring and alerts

## Testing the API

Use curl or Postman to test endpoints:

```bash
# Get all pools
curl http://localhost:3001/api/pools

# Get specific pool
curl http://localhost:3001/api/pools/pool-1

# Get pool analytics
curl http://localhost:3001/api/pools/pool-1/analytics

# Get user stakes
curl http://localhost:3001/api/user/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb/stakes
```

