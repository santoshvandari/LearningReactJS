import React from 'react'

function ContactInformation() {
    return (
        <div className="contact-info">
            <div className="info-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="info-header">
                    <h3>Let's Build Something Amazing</h3>
                    <p>Ready to bring your backend vision to life? Let's discuss your project and create
                        scalable solutions together.</p>
                </div>

                <div className="contact-details">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Location</h4>
                            <p>Jhapa, Nepal</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Email</h4>
                            <p>info@bhandari-santosh.com.np</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-clock"></i>
                        </div>
                        <div className="contact-text">
                            <h4>Response Time</h4>
                            <p>Within 24 hours</p>
                        </div>
                    </div>
                </div>

                <div className="social-links">
                    <a href="https://twitter.com/santoshvandari" target="_blank"
                        className="social-link twitter">
                        <i className="bi bi-twitter"></i>
                        <span>Twitter</span>
                    </a>
                    <a href="https://github.com/santoshvandari" target="_blank" className="social-link github">
                        <i className="bi bi-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santoshvandari" target="_blank"
                        className="social-link linkedin">
                        <i className="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/santosh.vandari" target="_blank"
                        className="social-link instagram">
                        <i className="bi bi-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ContactInformation
