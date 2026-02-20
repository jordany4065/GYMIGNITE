import React, { useState } from 'react';
import './LeadCapture.css';

const LeadCapture = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        goal: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // API/Webhook Integration Point
        // In a real application, this would POST to Supabase, Firebase, or a Webhook (Make/Zapier)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 800));

            console.log('Form data processed:', formData);

            // Open WhatsApp with populated message
            const message = `Welcome to GymIgnite!%0A%0A*New Trial Request:*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGoal: ${formData.goal.replace('_', ' ')}`;
            const whatsappUrl = `https://wa.me/917355075374?text=${message}`;

            window.open(whatsappUrl, '_blank');

            setStatus('success');
            setFormData({ name: '', phone: '', goal: '' }); // Reset form

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="book-trial" className="section lead-capture-section">
            <div className="container">
                <div className="lead-capture-wrapper">
                    <div className="lc-content">
                        <h2 className="lc-title">READY TO <span className="text-primary">IGNITE?</span></h2>
                        <p className="lc-subtitle">
                            Book your free trial today. Experience our premium facilities, expert coaching,
                            and vibrant community with absolutely zero commitment.
                        </p>
                        <ul className="lc-benefits">
                            <li>✓ Free assessment session</li>
                            <li>✓ Access to all group classes</li>
                            <li>✓ Customized workout plan</li>
                        </ul>
                    </div>

                    <div className="lc-form-container">
                        {status === 'success' ? (
                            <div className="lc-success-message">
                                <h3>Trial Requested!</h3>
                                <p>We've received your information. A coach will reach out via WhatsApp shortly to schedule your session.</p>
                                <button
                                    className="btn btn-outline"
                                    onClick={() => setStatus('idle')}
                                    style={{ marginTop: '1rem' }}
                                >
                                    Book Another Session
                                </button>
                            </div>
                        ) : (
                            <form className="lc-form" onSubmit={handleSubmit}>
                                <h3 className="form-title">Claim Your Free Trial</h3>

                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone Number (WhatsApp)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="goal" className="form-label">Primary Fitness Goal</label>
                                    <select
                                        id="goal"
                                        name="goal"
                                        className="form-input form-select"
                                        value={formData.goal}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select your goal</option>
                                        <option value="weight_loss">Weight Loss & Fat Burning</option>
                                        <option value="muscle_gain">Muscle Building & Hypertrophy</option>
                                        <option value="endurance">Endurance & Conditioning</option>
                                        <option value="general_fitness">General Health & Fitness</option>
                                    </select>
                                </div>

                                {status === 'error' && (
                                    <div className="form-error">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-large submit-btn"
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Processing...' : 'Book My Free Trial'}
                                </button>
                                <p className="form-disclaimer">
                                    By submitting, you agree to receive messages via WhatsApp regarding your trial.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
