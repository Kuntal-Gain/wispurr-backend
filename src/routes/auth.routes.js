const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth.controller');
const auth = require('../middleware/auth.middleware');

// [POST] methods
router.post('/signup', signup);
router.post('/login', login);

// [GET] methods
router.get('/profile', auth, async (req, res) => {
    res.send(`Hello user ${req.userId}, you're verified ✅`);
});

router.get('/login', (req, res) => {
    res.render('login');
});

// router.get('/signup', (req, res) => {
//     res.render('signup');
// });

module.exports = router;
