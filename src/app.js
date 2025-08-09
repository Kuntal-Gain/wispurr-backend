const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes placeholder
app.get('/', (req, res) => res.render('index'));
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app;
