import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "How does the free trial work?",
            answer: "Your free trial includes a complimentary assessment session with a coach, access to all our facilities, and unlimited group classes for 3 days. There's no commitment or hidden fees."
        },
        {
            id: 2,
            question: "Do I get trainer support?",
            answer: "Yes! Even on our Basic plan, there's always a floor coach available to spot you, correct your form, or answer quick questions. Our Pro and Elite plans include more structured, personalized support."
        },
        {
            id: 3,
            question: "What is the membership duration?",
            answer: "We offer flexible month-to-month plans with no long-term contracts. You can cancel or pause your membership anytime with 30 days notice."
        },
        {
            id: 4,
            question: "Is this gym beginner friendly?",
            answer: "Absolutely. We pride ourselves on creating a welcoming environment. Over 40% of our members started their fitness journey with us. Our coaches specialize in helping beginners build a strong foundation safely."
        }
    ];

    const [openId, setOpenId] = useState(1); // First item open by default

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span></h2>
                    <p className="section-subtitle">Everything you need to know about getting started</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openId === faq.id ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleAccordion(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                {faq.question}
                                {openId === faq.id ? (
                                    <ChevronUp size={20} className="faq-icon" />
                                ) : (
                                    <ChevronDown size={20} className="faq-icon" />
                                )}
                            </button>
                            <div
                                className="faq-answer-container"
                                style={{
                                    maxHeight: openId === faq.id ? '200px' : '0',
                                    opacity: openId === faq.id ? 1 : 0
                                }}
                            >
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
