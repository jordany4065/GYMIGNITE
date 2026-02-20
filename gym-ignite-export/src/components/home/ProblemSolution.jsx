import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
    const problems = [
        "Lack of motivation to stay consistent",
        "No structured plan or clear direction",
        "Feeling intimidated by complex gym equipment",
        "Slow results that lead to frustration"
    ];

    const solutions = [
        "Vibrant community & high-energy classes",
        "Personalized, goal-oriented fitness plans",
        "Expert coaching on proper form and technique",
        "Proven methods for rapid, sustainable results"
    ];

    return (
        <section className="section problem-solution-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">WHY MOST FITNESS JOURNEYS <span className="text-primary">FAIL</span></h2>
                    <p className="section-subtitle">And how we guarantee your success</p>
                </div>

                <div className="ps-grid">
                    {/* Problem Side */}
                    <div className="ps-card ps-problem">
                        <h3 className="ps-card-title">The Old Way</h3>
                        <ul className="ps-list">
                            {problems.map((item, index) => (
                                <li key={index} className="ps-list-item">
                                    <XCircle className="ps-icon icon-red" size={24} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Side */}
                    <div className="ps-card ps-solution">
                        <h3 className="ps-card-title text-primary">The Gym Ignite Way</h3>
                        <ul className="ps-list">
                            {solutions.map((item, index) => (
                                <li key={index} className="ps-list-item">
                                    <CheckCircle className="ps-icon icon-green" size={24} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
