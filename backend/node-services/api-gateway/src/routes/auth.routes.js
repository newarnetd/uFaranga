const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { services } = require('../config/services');

const router = express.Router();

// Proxy all auth requests to user-service
router.use('/', createProxyMiddleware({
  target: services.USER_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1/auth': '/api/v1/auth'
  },
  onError: (err, req, res) => {
    console.error('Auth service proxy error:', err);
    res.status(503).json({ error: 'Auth service unavailable' });
  }
}));

module.exports = router;