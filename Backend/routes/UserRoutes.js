// routes/userRoutes.js

const express = require('express');
const {
  // createUser,
  register,
  registerSheha,
  login,
  logout,
  authMiddleware,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsersShehia,
} = require('../controllers/UsersController');

// const { verifyToken } = require('../Auth/Auth.Middleware');

const router = express.Router();
// Protect all routes with authMiddleware
// router.use(verifyToken);

// Create a new user
router.post('/users', register);
router.post('/register-sheha', registerSheha);
router.post('/login', login);
router.post('/logout',logout );
router.post('/middleware', authMiddleware);

// Get all users
router.get('/users', getAllUsers);

router.get('/usersshehia', getAllUsersShehia);

// Get a user by ID
router.get('/users/:id', getUserById);

// Update a user
router.put('/users/:id', updateUser);

// Delete a user
router.delete('/users/:id', deleteUser);

module.exports = router;
