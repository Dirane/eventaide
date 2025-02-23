import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/services" className="nav-link">Services</Link></li>
                    <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>

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
                    <li><Link to="/" className="mobile-nav-link">Home</Link></li>
                    <li><Link to="/about" className="mobile-nav-link">About</Link></li>
                    <li><Link to="/services" className="mobile-nav-link">Services</Link></li>
                    <li><Link to="/portfolio" className="mobile-nav-link">Portfolio</Link></li>
                    <li><Link to="/contact" className="mobile-nav-link">Contact</Link></li>

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
