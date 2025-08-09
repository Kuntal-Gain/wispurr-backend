const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const app = require('./app');

// Connect to MongoDB
connectDB();

const server = http.createServer(app);

// Socket.io setup
const io = new Server(server, {
    cors: {
        origin: '*', // adjust for prod
        methods: ['GET', 'POST']
    }
});

// Socket events setup
// require('./sockets/socketHandler')(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
