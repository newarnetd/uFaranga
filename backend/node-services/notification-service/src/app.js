const express = require('express');
require('dotenv').config();

const kafkaConsumer = require('./consumers/kafka.consumer');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'notification-service'
  });
});

// Start Kafka consumer
kafkaConsumer.start().catch(error => {
  logger.error('Failed to start Kafka consumer:', error);
  process.exit(1);
});

app.listen(PORT, () => {
  logger.info(`🔔 Notification Service running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully');
  await kafkaConsumer.stop();
  process.exit(0);
});

module.exports = app;