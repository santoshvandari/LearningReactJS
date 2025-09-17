import React from 'react'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'

export default function ContactSection() {
    return (
        <>
            <section id="contact">
                <div class="section-header" data-aos="fade-up">
                    <h2 class="section-title">
                        <span class="section-number">04.</span>
                        Contact Santosh Bhandari
                    </h2>
                    <div class="section-line"></div>
                    <p style="color: #a8b2d1; text-align: center; margin-top: 1rem;">Let's discuss your next project</p>
                </div>

                <div class="contact-wrapper" data-aos="fade-up" data-aos-delay="200">
                    <div class="contact-content">
                    <ContactInformation />
                    <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}
