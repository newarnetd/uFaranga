const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

const authMiddleware = (socket, next) => {
  try {
    const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      logger.warn('WebSocket connection attempt without token');
      return next(new Error('Authentication token required'));
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Ajouter les informations utilisateur au socket
    socket.userId = decoded.userId;
    socket.userEmail = decoded.email;
    socket.userRole = decoded.role || 'user';
    
    logger.info(`WebSocket authentication successful for user: ${decoded.email}`);
    next();
  } catch (error) {
    logger.error('WebSocket authentication failed:', error.message);
    next(new Error('Invalid authentication token'));
  }
};

module.exports = authMiddleware;