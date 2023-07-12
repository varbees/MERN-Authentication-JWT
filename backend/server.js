import express from 'express';
import { __port__ } from './constants.js';
import router from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

const PORT = __port__;

connectDB();

const app = express();

app.use('/api/users', router);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// POST - /api/users - Register a user
// POST - /api/users/auth - Authenticate a user and get token
// POST - /api/users/logout - Logout user and clear cookie
// GET - /api/users/profile - Get user Profile
// PUT - /api/users/profile - Update user profile
// DELETE - /api/users/delete - Delete a user