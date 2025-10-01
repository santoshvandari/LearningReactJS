import React from 'react'

function HeroDescription() {
    return (
        <div className="name-section">
            <h1 className="main-title">
                <span className="greeting">Hello, I'm</span>
                <span className="name-highlight" id="text-hover-effect">Santosh Bhandari</span>
            </h1>
            <div className="role-container">
                <span className="role-prefix">A passionate</span>
                <span className="role-text" id="typing"></span>
            </div>
            <p className="hero-description">
                Welcome to <strong>Santosh Bhandari's personal portfolio</strong>. I'm a passionate <strong>Full-Stack Developer</strong> from
                <strong>Nepal</strong>, building robust applications with expertise in
                <strong>Python</strong>, <strong>JavaScript</strong>, and modern web technologies.
                Specialized in scalable backend architectures and creating exceptional digital
                experiences. Available for freelance projects and full-time opportunities.
            </p>

            {/* <div className="cta-buttons">
                                <a href="#contact" className="btn-primary">
                                    <i className="bi bi-chat-dots"></i>
                                    Let's Talk
                                </a>
                                <a href="files/cv.pdf" download className="btn-secondary">
                                    <i className="bi bi-download"></i>
                                    Download CV
                                </a>
                            </div> */}
        </div>
    )
}

export default HeroDescription
