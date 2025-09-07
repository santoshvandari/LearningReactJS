
function HeroSection() {
    return (
        <section id="home">
            <div className="floating-icons">
                <div className="floating-icon" data-tech="python"><i className="bi bi-code-slash"></i></div>
                <div className="floating-icon" data-tech="database"><i className="bi bi-database"></i></div>
                <div className="floating-icon" data-tech="api"><i className="bi bi-braces"></i></div>
                <div className="floating-icon" data-tech="cloud"><i className="bi bi-cloud"></i></div>
                <div className="floating-icon" data-tech="git"><i className="bi bi-git"></i></div>
                <div className="floating-icon" data-tech="terminal"><i className="bi bi-terminal"></i></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="profile-section" data-aos="fade-up" data-aos-delay="300">
                        <div className="image-container">
                            <div className="profile-ring"></div>
                            <div className="image">
                                <img src="public/img.png"
                                    alt="Santosh Bhandari - Professional Backend Developer and Full-Stack Engineer from Nepal"
                                    loading="eager" width="200" height="200"/>
                            </div>
                            <div className="status-indicator">
                                <span className="status-dot"></span>
                                <span className="status-text">Available for work</span>
                            </div>
                        </div>

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
                    </div>
                </div>

                <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
                    <div className="scroll-text">Scroll to explore</div>
                    <div className="scroll-btn">
                        <div className="scroll-arrow">
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                    <div className="scroll-hint">Discover my journey</div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
