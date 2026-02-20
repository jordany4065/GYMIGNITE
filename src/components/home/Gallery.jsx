import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const transformations = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
            name: "Mike T.",
            result: "Lost 30 lbs in 12 weeks",
            plan: "Weight Loss Program"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
            name: "Sarah J.",
            result: "Gained 15 lbs lean muscle",
            plan: "Muscle Gain Program"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            name: "David W.",
            result: "Improved mobility & strength",
            plan: "Functional Fitness"
        }
    ];

    return (
        <section className="section gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">REAL PEOPLE, <span className="text-primary">REAL RESULTS</span></h2>
                    <p className="section-subtitle">See what's possible when you commit to the process</p>
                </div>

                <div className="gallery-grid">
                    {transformations.map((item) => (
                        <div key={item.id} className="gallery-card">
                            <div className="gallery-image-wrapper">
                                <img src={item.image} alt={`${item.name} transformation`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="gallery-program-badge">{item.plan}</span>
                                </div>
                            </div>
                            <div className="gallery-info">
                                <h3 className="gallery-name">{item.name}</h3>
                                <p className="gallery-result">{item.result}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-xl">
                    <a href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite" target="_blank" rel="noopener noreferrer" className="btn btn-large">Start Your Transformation</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
