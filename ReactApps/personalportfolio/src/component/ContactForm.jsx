import React from 'react'

function ContactForm() {
    return (
        <div className="contact-form-container">
            <div className="form-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="form-header">
                    <h3>Send Message</h3>
                    <p>Have a project in mind? Let's discuss it!</p>
                </div>

                <form action="success.html" method="post" data-netlify="true" autocomplete="off"
                    data-netlify-recaptcha="true" className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Project Discussion"
                            required />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"
                            placeholder="Tell me about your project requirements..." required></textarea>
                        <div className="input-highlight"></div>
                    </div>

                    <div data-netlify-recaptcha="true"></div>

                    <button type="submit" className="submit-btn">
                        <span className="btn-text">Send Message</span>
                        <span className="btn-icon"><i className="bi bi-send"></i></span>
                        <div className="btn-ripple"></div>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ContactForm
