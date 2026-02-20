import React from 'react';
import { Dumbbell, Flame, HeartPulse, Activity } from 'lucide-react';
import './Programs.css';

const Programs = () => {
    const programsData = [
        {
            id: 1,
            title: "Weight Loss",
            description: "High-intensity interval training designed to burn maximum calories and shed fat fast.",
            icon: <Flame size={32} className="program-icon" />
        },
        {
            id: 2,
            title: "Muscle Gain",
            description: "Structured hypertrophy programs to help you build lean muscle mass effectively.",
            icon: <Dumbbell size={32} className="program-icon" />
        },
        {
            id: 3,
            title: "Personal Training",
            description: "1-on-1 coaching with expert trainers tailored specifically to your unique goals.",
            icon: <HeartPulse size={32} className="program-icon" />
        },
        {
            id: 4,
            title: "Functional Fitness",
            description: "Improve your everyday strength, mobility, and endurance with dynamic workouts.",
            icon: <Activity size={32} className="program-icon" />
        }
    ];

    return (
        <section id="programs" className="section programs-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">OUR <span className="text-primary">PROGRAMS</span></h2>
                    <p className="section-subtitle">Tailored solutions for every fitness level and goal</p>
                </div>

                <div className="programs-grid">
                    {programsData.map((program) => (
                        <div key={program.id} className="program-card">
                            <div className="program-icon-wrapper">
                                {program.icon}
                            </div>
                            <h3 className="program-title">{program.title}</h3>
                            <p className="program-desc">{program.description}</p>
                            <a href="https://wa.me/917355075374?text=Welcome%20to%20GymIgnite" target="_blank" rel="noopener noreferrer" className="program-link">
                                Learn More <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
