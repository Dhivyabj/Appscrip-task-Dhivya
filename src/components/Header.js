import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header-logo">
                LuxeStyle
            </a>

            <nav className="header-nav">
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Stories</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                {/* Simple text icons for now, can replace with SVGs later */}
                <span>🔍</span>
                <span>🛒</span>
                <span>👤</span>
            </div>
        </header>
    );
};

export default Header;
