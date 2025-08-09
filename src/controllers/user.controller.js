const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Get all users (excluding password)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};

// Get a single user
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ msg: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};

// Update user profile
exports.updateUser = async (req, res) => {
    try {
        const { username, email, avatar } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { username, email, avatar },
            { new: true }
        ).select('-password');
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ msg: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};
