import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="main">
            <nav className="nav-bar md-sec">
                {/* Logo */}
                <div className="logo">
                    <img src="/images/logo.png" alt="EventAide" />
                </div>

                {/* Navigation Links */}
                <ul className="nav-links hidden md:flex">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Services</a></li>
                    <li><a href="#" className="nav-link">Portfolio</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>

                {/* Hamburger Menu (Visible on Small Screens) */}
                <div className="hamburger-menu md:hidden">
                    <button id="menu-btn" className="menu-btn" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="mobile-menu md:hidden">
                    <li><a href="#" className="mobile-nav-link">Home</a></li>
                    <li><a href="#" className="mobile-nav-link">About</a></li>
                    <li><a href="#" className="mobile-nav-link">Services</a></li>
                    <li><a href="#" className="mobile-nav-link">Portfolio</a></li>
                    <li><a href="#" className="mobile-nav-link">Contact</a></li>
                </ul>
            )}

            {/* Hero Section */}
            <div className="hero-section md-sec">
                <div className="hero-title">
                    Explore our events
                </div>
                <div className="hero-description">
                    TCC: Cultivating a vibrant community of innovators, empowering the next
                    generation of developers, and driving sustainable progress through collaboration 
                    and cutting-edge code.
                </div>
            </div>
        </section>
    );
};

export default Header;