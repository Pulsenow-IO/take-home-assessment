# Backend Development Task

## Overview

The backend is already set up with a proper MVC architecture. Your task is to understand and work with this structure, and optionally extend it.

## Existing Structure

The backend follows best practices with:

### Controllers (`/controllers`)
- `poolController.js` - Handles pool-related requests
- `analyticsController.js` - Handles analytics and reporting
- `userController.js` - Handles user-specific data

### Routes (`/routes`)
- `poolRoutes.js` - Defines pool endpoints
- `analyticsRoutes.js` - Defines analytics endpoints  
- `userRoutes.js` - Defines user endpoints
- `index.js` - Main router combining all routes

### Middleware (`/middleware`)
- `errorHandler.js` - Global error handling
- `logger.js` - Request logging
- `validator.js` - Input validation

### Models (`/models`)
- `poolModel.js` - Mock data and database simulation

## Your Tasks

### Required (Understanding the Codebase)
1. ✅ Understand how the MVC structure works
2. ✅ Identify how requests flow: Route → Middleware → Controller → Model
3. ✅ Understand how middleware is applied (validation, logging, error handling)
4. ✅ Use the existing API endpoints in your frontend integration

### Optional (Extending Backend)
If you want to show additional backend skills, you can:

1. **Add a new endpoint**
   - Example: `GET /api/pools/:poolId/stakers` - Get list of top stakers
   - Example: `POST /api/pools/:poolId/calculate-rewards` - Calculate rewards for a user

2. **Add new middleware**
   - Rate limiting
   - Request caching
   - Authentication/authorization (mock)

3. **Improve error handling**
   - More specific error types
   - Better error messages
   - Error logging

4. **Add data validation**
   - Validate query parameters
   - Add request body validation
   - Sanitize inputs

## Code Quality Expectations

Even though you're mainly using the existing backend, we'll evaluate:

- ✅ How well you understand the architecture
- ✅ How you integrate with it from the frontend
- ✅ Code quality if you extend it
- ✅ Understanding of Express.js patterns
- ✅ Proper error handling in frontend API calls

## API Integration Example

```javascript
// Frontend example of calling backend
const response = await axios.get(`${API_BASE_URL}/api/pools`);
const pools = response.data.data;

// With error handling
try {
  const response = await axios.get(`${API_BASE_URL}/api/pools/${poolId}/analytics`);
  const analytics = response.data.data;
} catch (error) {
  if (error.response?.status === 404) {
    // Handle not found
  } else {
    // Handle other errors
  }
}
```

## Notes

- The backend uses mock data - no database setup needed
- All endpoints are GET requests (read-only)
- Focus on understanding the structure, not rebuilding it
- If you extend it, document your changes
- Make sure your frontend properly handles API errors

## Questions to Consider

1. How does the middleware chain work?
2. Where should new endpoints be added?
3. How does error handling flow through the application?
4. What happens if validation fails?
5. How would you add authentication to this structure?

