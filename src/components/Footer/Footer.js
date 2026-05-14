import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>🏦 SecureBank</h3>
                    <p>Your trusted partner for secure and convenient banking services.</p>
                    <div className="social-links">
                        <a href="#facebook" aria-label="Facebook">📘</a>
                        <a href="#twitter" aria-label="Twitter">🐦</a>
                        <a href="#linkedin" aria-label="LinkedIn">💼</a>
                        <a href="#instagram" aria-label="Instagram">📷</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#accounts">Accounts</a></li>
                        <li><a href="#transfer">Transfer</a></li>
                        <li><a href="#history">Transaction History</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#savings">Savings Account</a></li>
                        <li><a href="#checking">Checking Account</a></li>
                        <li><a href="#loans">Loans</a></li>
                        <li><a href="#investments">Investments</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>📍 123 Banking Street, Finance City</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>✉️ support@securebank.com</li>
                        <li>🕐 24/7 Customer Support</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 SecureBank. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#security">Security</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
