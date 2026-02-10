package com.ufaranga.transaction.model;

public enum TransactionStatus {
    PENDING("Transaction is pending"),
    PROCESSING("Transaction is being processed"),
    COMPLETED("Transaction completed successfully"),
    FAILED("Transaction failed"),
    CANCELLED("Transaction was cancelled"),
    EXPIRED("Transaction expired"),
    REFUNDED("Transaction was refunded");

    private final String description;

    TransactionStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public boolean isTerminal() {
        return this == COMPLETED || this == FAILED || this == CANCELLED || this == EXPIRED || this == REFUNDED;
    }

    public boolean isSuccessful() {
        return this == COMPLETED;
    }

    @Override
    public String toString() {
        return description;
    }
}