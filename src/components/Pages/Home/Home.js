import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const dummyData = [
        {
            id: 1,
            type: "Account Opening",
            icon: "📝",
            path: "/account-opening"
        },
        {
            id: 2,
            type: "Money Transfer",
            icon: "💸",
            path: "/money-transfer"
        },
        {
            id: 3,
            type: "Deposit",
            icon: "💰",
            path: "/deposit"
        },
        {
            id: 4,
            type: "Withdraw",
            icon: "🏧",
            path: "/withdraw"
        },
         {
            id: 8,
            type: "Balance Check",
            icon: "⚖️",
            path: "/balance-check"
        },
         {
            id: 15,
            type: "Customer Support",
            icon: "🎧",
            path: "/customer-support"
        },
        {
            id: 5,
            type: "Loan Application",
            icon: "📊",
            path: "/loan-application"
        },
        {
            id: 6,
            type: "Credit Card",
            icon: "💳",
            path: "/credit-card"
        },
        {
            id: 7,
            type: "Debit Card",
            icon: "💳",
            path: "/debit-card"
        },
       
        {
            id: 9,
            type: "Transaction History",
            icon: "📜",
            path: "/transaction-history"
        },
        {
            id: 10,
            type: "Fixed Deposit",
            icon: "🏦",
            path: "/fixed-deposit"
        },
        {
            id: 11,
            type: "Mobile Banking",
            icon: "📱",
            path: "/mobile-banking"
        },
        {
            id: 12,
            type: "Internet Banking",
            icon: "💻",
            path: "/internet-banking"
        },
        {
            id: 13,
            type: "Bill Payments",
            icon: "📄",
            path: "/bill-payments"
        },
        {
            id: 14,
            type: "UPI Payments",
            icon: "📲",
            path: "/upi-payments"
        },
       
    ];

    return (
        <div className="home-container">
            <h1>Welcome to Banking Management System</h1>
            <div className="home-grid">
                {dummyData.map((item) => (
                    <div key={item.id} className="home-item" onClick={() => navigate(item.path)}    >
                        <div className="home-icon" >{item.icon}</div>
                        <h2>{item.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home