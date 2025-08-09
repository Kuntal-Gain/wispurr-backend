const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String,
            default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        },
        isOnline: {
            type: Boolean,
            default: true,
        },
        lastSeen: {
            type: Date,
            default: Date.now,
        },
        deviceTokens: [String],
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
