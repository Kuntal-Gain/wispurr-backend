const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'No token, access denied' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // attach userId to request
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;
