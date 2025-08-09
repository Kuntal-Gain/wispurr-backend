const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        const token = generateToken(newUser._id);

        res.status(201).json({ user: newUser, token });
    } catch (err) {
        res.status(500).json({ msg: 'Signup failed', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: 'User not found' }); // failsafe

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

        // generate token
        const token = generateToken(user._id);

        // update user
        user.isOnline = true;
        user.lastSeen = Date.now();
        await user.save();

        res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json({ msg: 'Login failed', error: err.message });
    }
};

exports.logout = async (req, res) => {
    try {

        // update user
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ msg: 'User not found' }); // failsafe

        user.isOnline = false;
        user.lastSeen = Date.now();
        await user.save();

        res.status(200).json({ msg: 'Logout successful' });
    } catch (err) {
        res.status(500).json({ msg: 'Logout failed', error: err.message });
    }
};