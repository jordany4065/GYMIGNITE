import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">FIND <span className="text-primary">US</span></h2>
                    <p className="section-subtitle">
                        Visit our flagship location in the heart of Kandivali.
                        Experience the vibe before you join.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.879987954897!2d72.8448715!3d19.206773499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c7d151eb11%3A0x53c60cb900ce3b40!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1771990303769!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gym Location"
                        ></iframe>
                    </div>

                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h3>Location</h3>
                                <p>Kandivali West, Mumbai, Maharashtra 400067</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🕒</div>
                            <div className="info-content">
                                <h3>Working Hours</h3>
                                <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
                                <p>Sun: 8:00 AM - 2:00 PM</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h3>Contact</h3>
                                <p>Phone: +91 73550 75374</p>
                                <p>Email: hello@gymignite.com</p>
                            </div>
                        </div>

                        <div className="contact-cta">
                            <a href="#book-trial" className="btn btn-primary">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
