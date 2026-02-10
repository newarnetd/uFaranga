const { Server } = require('socket.io');
const { createServer } = require('http');
const jwt = require('jsonwebtoken');
const Redis = require('redis');
require('dotenv').config();

const logger = require('./utils/logger');
const authMiddleware = require('./middleware/auth.middleware');

const PORT = process.env.PORT || 3002;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Créer le serveur HTTP
const httpServer = createServer();

// Configurer Socket.IO avec Redis adapter
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Redis client pour l'adapter
const redisClient = Redis.createClient({ url: REDIS_URL });
const pubClient = redisClient.duplicate();
const subClient = redisClient.duplicate();

// Configurer l'adapter Redis
const { createAdapter } = require('@socket.io/redis-adapter');
io.adapter(createAdapter(pubClient, subClient));

// Middleware d'authentification
io.use(authMiddleware);

// Gestion des connexions
io.on('connection', (socket) => {
  const userId = socket.userId;
  const userEmail = socket.userEmail;
  
  logger.info(`User connected: ${userEmail} (${userId})`);
  
  // Rejoindre la room personnelle de l'utilisateur
  socket.join(`user:${userId}`);
  
  // Événements de transaction
  socket.on('subscribe_transactions', () => {
    socket.join(`transactions:${userId}`);
    logger.info(`User ${userEmail} subscribed to transaction updates`);
  });
  
  socket.on('unsubscribe_transactions', () => {
    socket.leave(`transactions:${userId}`);
    logger.info(`User ${userEmail} unsubscribed from transaction updates`);
  });
  
  // Événements de wallet
  socket.on('subscribe_wallet', (walletId) => {
    socket.join(`wallet:${walletId}`);
    logger.info(`User ${userEmail} subscribed to wallet ${walletId} updates`);
  });
  
  socket.on('unsubscribe_wallet', (walletId) => {
    socket.leave(`wallet:${walletId}`);
    logger.info(`User ${userEmail} unsubscribed from wallet ${walletId} updates`);
  });
  
  // Événements de chat support
  socket.on('join_support_chat', (chatId) => {
    socket.join(`support:${chatId}`);
    logger.info(`User ${userEmail} joined support chat ${chatId}`);
  });
  
  socket.on('leave_support_chat', (chatId) => {
    socket.leave(`support:${chatId}`);
    logger.info(`User ${userEmail} left support chat ${chatId}`);
  });
  
  socket.on('send_support_message', (data) => {
    const { chatId, message } = data;
    const messageData = {
      id: Date.now(),
      userId,
      userEmail,
      message,
      timestamp: new Date().toISOString()
    };
    
    // Envoyer à tous les participants du chat
    io.to(`support:${chatId}`).emit('support_message', messageData);
    logger.info(`Support message sent in chat ${chatId} by ${userEmail}`);
  });
  
  // Ping/Pong pour maintenir la connexion
  socket.on('ping', () => {
    socket.emit('pong');
  });
  
  // Déconnexion
  socket.on('disconnect', (reason) => {
    logger.info(`User disconnected: ${userEmail} (${userId}) - Reason: ${reason}`);
  });
  
  // Gestion des erreurs
  socket.on('error', (error) => {
    logger.error(`Socket error for user ${userEmail}:`, error);
  });
});

// Fonctions pour émettre des événements depuis d'autres services
const emitToUser = (userId, event, data) => {
  io.to(`user:${userId}`).emit(event, data);
};

const emitToWallet = (walletId, event, data) => {
  io.to(`wallet:${walletId}`).emit(event, data);
};

const emitTransactionUpdate = (userId, transactionData) => {
  io.to(`transactions:${userId}`).emit('transaction_update', transactionData);
};

const emitBalanceUpdate = (walletId, balanceData) => {
  io.to(`wallet:${walletId}`).emit('balance_update', balanceData);
};

// Exposer les fonctions pour les autres modules
module.exports = {
  io,
  emitToUser,
  emitToWallet,
  emitTransactionUpdate,
  emitBalanceUpdate
};

// Démarrer le serveur
async function startServer() {
  try {
    await redisClient.connect();
    await pubClient.connect();
    await subClient.connect();
    
    httpServer.listen(PORT, () => {
      logger.info(`🔌 WebSocket Service running on port ${PORT}`);
      logger.info(`Redis connected: ${REDIS_URL}`);
    });
  } catch (error) {
    logger.error('Failed to start WebSocket service:', error);
    process.exit(1);
  }
}

// Gestion de l'arrêt propre
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully');
  await redisClient.disconnect();
  await pubClient.disconnect();
  await subClient.disconnect();
  httpServer.close(() => {
    process.exit(0);
  });
});

if (require.main === module) {
  startServer();
}