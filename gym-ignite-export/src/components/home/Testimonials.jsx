import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex R.",
            role: "Member for 2 years",
            content: "Joining Gym Ignite was the best decision of my life. The trainers actually care about your progress and the community keeps you accountable. I've never felt stronger.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Jessica M.",
            role: "Member for 6 months",
            content: "The classes are incredible! High energy, great music, and workouts that actually push you. I've lost 15lbs and made some amazing friends along the way.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Marcus T.",
            role: "Member for 1 year",
            content: "The personal training here is next level. My coach built a program specifically for my busy schedule and bad knees. Pain-free and in the best shape of my 40s.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">DON'T JUST TAKE <span className="text-primary">OUR WORD FOR IT</span></h2>
                    <p className="section-subtitle">Hear from our community members</p>
                </div>

                <div className="testimonial-slider-container">
                    <button className="slider-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonial-slider">
                        <div
                            className="testimonial-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-slide">
                                    <div className="testimonial-card">
                                        <div className="testimonial-stars">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                                            ))}
                                        </div>
                                        <p className="testimonial-content">"{testimonial.content}"</p>
                                        <div className="testimonial-author">
                                            <img src={testimonial.image} alt={testimonial.name} className="author-img" />
                                            <div className="author-info">
                                                <h4 className="author-name">{testimonial.name}</h4>
                                                <span className="author-role">{testimonial.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="slider-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
