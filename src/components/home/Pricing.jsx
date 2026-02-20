import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            id: "basic",
            name: "Basic",
            price: "49",
            period: "per month",
            description: "Perfect for getting started on your fitness journey.",
            features: [
                "Full gym access",
                "Free locker & towel service",
                "Access to basic equipment",
                "1 Free assessment session"
            ],
            isPopular: false,
            buttonText: "Start Basic"
        },
        {
            id: "popular",
            name: "Pro",
            price: "89",
            period: "per month",
            description: "Everything you need to see maximum results fast.",
            features: [
                "Everything in Basic",
                "Unlimited group classes",
                "Customized workout plan",
                "Monthly body composition scan",
                "Nutrition guide included"
            ],
            isPopular: true,
            buttonText: "Book Free Trial"
        },
        {
            id: "premium",
            name: "Elite",
            price: "199",
            period: "per month",
            description: "The ultimate package with 1-on-1 expert coaching.",
            features: [
                "Everything in Pro",
                "8 Personal training sessions/mo",
                "Custom meal prep planning",
                "Priority class booking",
                "Free guest passes (2/mo)"
            ],
            isPopular: false,
            buttonText: "Go Elite"
        }
    ];

    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">CHOOSE YOUR <span className="text-primary">PLAN</span></h2>
                    <p className="section-subtitle">No hidden fees, no long-term contracts. Just pure results.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.isPopular ? 'popular-plan' : ''}`}
                        >
                            {plan.isPopular && <div className="popular-badge">Most Popular</div>}

                            <div className="pricing-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">{plan.price}</span>
                                    <span className="period">/{plan.period.split(' ')[1]}</span>
                                </div>
                                <p className="plan-desc">{plan.description}</p>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="feature-item">
                                        <Check size={20} className="feature-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-footer">
                                <a
                                    href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite"
                                    target="_blank" rel="noopener noreferrer"
                                    className={`btn btn-large w-100 ${plan.isPopular ? '' : 'btn-outline'}`}
                                >
                                    {plan.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
