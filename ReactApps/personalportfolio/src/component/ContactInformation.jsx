import React from 'react'

function ContactInformation() {
    return (
        <div class="contact-info">
            <div class="info-card" data-aos="zoom-in" data-aos-delay="300">
                <div class="info-header">
                    <h3>Let's Build Something Amazing</h3>
                    <p>Ready to bring your backend vision to life? Let's discuss your project and create
                        scalable solutions together.</p>
                </div>

                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-geo-alt"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Location</h4>
                            <p>Jhapa, Nepal</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-envelope"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Email</h4>
                            <p>info@bhandari-santosh.com.np</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="bi bi-clock"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Response Time</h4>
                            <p>Within 24 hours</p>
                        </div>
                    </div>
                </div>

                <div class="social-links">
                    <a href="https://twitter.com/santoshvandari" target="_blank"
                        class="social-link twitter">
                        <i class="bi bi-twitter"></i>
                        <span>Twitter</span>
                    </a>
                    <a href="https://github.com/santoshvandari" target="_blank" class="social-link github">
                        <i class="bi bi-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santoshvandari" target="_blank"
                        class="social-link linkedin">
                        <i class="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/santosh.vandari" target="_blank"
                        class="social-link instagram">
                        <i class="bi bi-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ContactInformation
