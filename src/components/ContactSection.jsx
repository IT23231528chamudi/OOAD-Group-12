import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-form-container">
                        <h4 className="contact-subtitle">Contact Us</h4>
                        <h2 className="contact-title">Reach Out To Us</h2>
                        <form className="contact-form">
                            <input type="text" placeholder="Name" className="contact-input" />
                            <input type="email" placeholder="Email" className="contact-input" />
                            <textarea placeholder="Message" className="contact-textarea"></textarea>
                            <button type="submit" className="contact-submit-button">Submit</button>
                        </form>
                    </div>
                    <div className="contact-card-container">
                        <div className="contact-card">
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <h5 className="contact-info">011-234-5678</h5>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <h5 className="contact-info">Splendourlux@gmail.com</h5>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <h5 className="contact-info">No. 234, Chapel Road, Colombo</h5>
                            </div>
                            <div className="contact-social-links">
                                <a href="#" className="contact-social-link">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="contact-social-link">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="contact-social-link">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
