package com.ufaranga.transaction.model;

public enum TransactionType {
    P2P_TRANSFER("Peer to Peer Transfer"),
    DEPOSIT("Deposit"),
    WITHDRAWAL("Withdrawal"),
    PAYMENT("Payment"),
    REFUND("Refund"),
    FEE("Fee"),
    CASHBACK("Cashback"),
    INTEREST("Interest"),
    PENALTY("Penalty"),
    ADJUSTMENT("Adjustment");

    private final String description;

    TransactionType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return description;
    }
}