import React from 'react'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'

const paragraphStyle={
    color:"#a8b2d1",
    textAlign:"center",
    marginTop:"1rem"
} 
function ContactSection() {
    return (
        <>
            <section id="contact">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">
                        <span className="section-number">04.</span>
                        Contact Santosh Bhandari
                    </h2>
                    <div className="section-line"></div>
                    {/* <p style="color: #a8b2d1; text-align: center; margin-top: 1rem;">Let's discuss your next project</p> */}
                    <p style={paragraphStyle}>Let's Discuss your Next Project</p>
                </div>

                <div className="contact-wrapper" data-aos="fade-up" data-aos-delay="200">
                    <div className="contact-content">
                    <ContactInformation />
                    <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection