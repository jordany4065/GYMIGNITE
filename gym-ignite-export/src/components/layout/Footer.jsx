import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="logo footer-logo">
                            GYM<span className="text-primary">IGNITE</span>
                        </a>
                        <p className="footer-desc">
                            Transforming lives through fitness, community, and expert coaching. Join the movement today.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#programs">Programs</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite" target="_blank" rel="noopener noreferrer">Free Trial</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>123 Fitness Ave, Iron District, NY 10001</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>info@gymignite.fitness</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gym Ignite. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
