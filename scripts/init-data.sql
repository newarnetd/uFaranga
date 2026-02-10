-- Script d'initialisation des données de base pour uFaranga

-- =============================================
-- DONNÉES POUR WALLET SERVICE (ufaranga_wallets)
-- =============================================
\c ufaranga_wallets;

-- Insertion des devises supportées
INSERT INTO currencies (code, name, symbol, decimal_places, is_active, created_at, updated_at) VALUES
('USD', 'US Dollar', '$', 2, true, NOW(), NOW()),
('EUR', 'Euro', '€', 2, true, NOW(), NOW()),
('XOF', 'West African CFA Franc', 'CFA', 0, true, NOW(), NOW()),
('XAF', 'Central African CFA Franc', 'FCFA', 0, true, NOW(), NOW()),
('GHS', 'Ghanaian Cedi', '₵', 2, true, NOW(), NOW()),
('NGN', 'Nigerian Naira', '₦', 2, true, NOW(), NOW()),
('KES', 'Kenyan Shilling', 'KSh', 2, true, NOW(), NOW()),
('ZAR', 'South African Rand', 'R', 2, true, NOW(), NOW()),
('MAD', 'Moroccan Dirham', 'MAD', 2, true, NOW(), NOW()),
('TND', 'Tunisian Dinar', 'TND', 3, true, NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- Taux de change de base (USD comme référence)
INSERT INTO exchange_rates (from_currency_code, to_currency_code, rate, inverse_rate, source, valid_from, is_active, created_at, updated_at) VALUES
-- USD vers autres devises
('USD', 'EUR', 0.85, 1.18, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'XOF', 600.00, 0.00167, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'XAF', 600.00, 0.00167, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'GHS', 12.00, 0.083, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'NGN', 800.00, 0.00125, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'KES', 150.00, 0.00667, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'ZAR', 18.50, 0.054, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'MAD', 10.00, 0.10, 'manual', NOW(), true, NOW(), NOW()),
('USD', 'TND', 3.10, 0.323, 'manual', NOW(), true, NOW(), NOW()),

-- EUR vers autres devises principales
('EUR', 'USD', 1.18, 0.85, 'manual', NOW(), true, NOW(), NOW()),
('EUR', 'XOF', 655.96, 0.00152, 'manual', NOW(), true, NOW(), NOW()),
('EUR', 'XAF', 655.96, 0.00152, 'manual', NOW(), true, NOW(), NOW())
ON CONFLICT (from_currency_code, to_currency_code, valid_from) DO NOTHING;

-- =============================================
-- DONNÉES POUR USER SERVICE (ufaranga_users)
-- =============================================
\c ufaranga_users;

-- Les utilisateurs seront créés via l'API Django
-- Ici on peut insérer des données de configuration

-- =============================================
-- DONNÉES POUR TRANSACTION SERVICE (ufaranga_transactions)
-- =============================================
\c ufaranga_transactions;

-- Configuration des types de transactions et leurs limites
-- Ces données seront gérées par l'application Spring Boot

-- =============================================
-- DONNÉES POUR KYC SERVICE (ufaranga_kyc)
-- =============================================
\c ufaranga_kyc;

-- Types de documents acceptés pour la vérification KYC
-- Ces données seront gérées par l'application Django

-- =============================================
-- DONNÉES COMMUNES
-- =============================================

-- Fonction pour générer des UUIDs (si pas déjà disponible)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Fonction pour les timestamps automatiques
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Appliquer la fonction aux tables qui ont une colonne updated_at
-- (sera fait par les migrations Django/Spring Boot)

COMMIT;