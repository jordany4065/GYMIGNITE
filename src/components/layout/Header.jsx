import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Programs', href: '#programs' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#home" className="logo">
                    GYM<span className="text-primary">IGNITE</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite" target="_blank" rel="noopener noreferrer" className="btn btn-sm header-cta">Book Free Trial</a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite"
                            target="_blank" rel="noopener noreferrer"
                            className="btn mobile-header-cta"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book Free Trial
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
