import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background Overlay */}
            <div className="hero-overlay"></div>

            {/* Hero Content */}
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Ignite Your Potential</span>
                    <h1 className="hero-title">
                        TRANSFORM YOUR BODY.<br />
                        <span className="text-primary">ELEVATE YOUR LIFE.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join the ultimate fitness community. Get expert coaching, personalized programs, and the motivation you need to achieve your goals.
                    </p>
                    <div className="hero-actions">
                        <a href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite" target="_blank" rel="noopener noreferrer" className="btn btn-large hero-btn-primary">
                            Book Free Trial
                        </a>
                        <a href="#programs" className="btn btn-outline btn-large hero-btn-secondary">
                            View Programs
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">5K+</span>
                            <span className="stat-label">Active Members</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Expert Trainers</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Gym Access</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
