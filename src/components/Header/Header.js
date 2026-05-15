import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/"><h1> 🏦 SecureBank</h1></Link>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                      <li><Link to="/" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                      <li><Link to="/accounts" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/accounts' ? 'active' : ''}>Accounts</Link></li>
                      <li><Link to="/money-transfer" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/money-transfer' ? 'active' : ''}>Transfer</Link></li>
                      <li><Link to="/history" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/history' ? 'active' : ''}>History</Link></li>
                      <li><Link to="/customer-support" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/customer-support' ? 'active' : ''}>Support</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    {/* <button className="login-btn">Login</button> */}
                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
