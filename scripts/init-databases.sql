-- Script d'initialisation des bases de données pour uFaranga

-- Créer les bases de données pour chaque service
CREATE DATABASE ufaranga_users;
CREATE DATABASE ufaranga_wallets;
CREATE DATABASE ufaranga_kyc;
CREATE DATABASE ufaranga_transactions;
CREATE DATABASE ufaranga_admin;

-- Créer un utilisateur pour chaque service (optionnel, pour plus de sécurité)
-- CREATE USER ufaranga_user_service WITH PASSWORD 'user_service_password';
-- CREATE USER ufaranga_wallet_service WITH PASSWORD 'wallet_service_password';
-- CREATE USER ufaranga_kyc_service WITH PASSWORD 'kyc_service_password';
-- CREATE USER ufaranga_transaction_service WITH PASSWORD 'transaction_service_password';

-- Accorder les privilèges
-- GRANT ALL PRIVILEGES ON DATABASE ufaranga_users TO ufaranga_user_service;
-- GRANT ALL PRIVILEGES ON DATABASE ufaranga_wallets TO ufaranga_wallet_service;
-- GRANT ALL PRIVILEGES ON DATABASE ufaranga_kyc TO ufaranga_kyc_service;
-- GRANT ALL PRIVILEGES ON DATABASE ufaranga_transactions TO ufaranga_transaction_service;

-- Extensions utiles
\c ufaranga_users;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

\c ufaranga_wallets;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

\c ufaranga_kyc;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

\c ufaranga_transactions;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

\c ufaranga_admin;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";