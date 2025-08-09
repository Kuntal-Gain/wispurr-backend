const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Protected routes
router.get('/get-users', authMiddleware, getAllUsers);
router.get('/get-user/:id', authMiddleware, getUserById);
router.put('/update/:id', authMiddleware, updateUser);
router.delete('/delete-user/:id', authMiddleware, deleteUser);

module.exports = router;
