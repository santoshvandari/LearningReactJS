import React from 'react'

const AboutSection = () => {
    return (
        <section id="about">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">
                    <span className="section-number">01.</span>
                    About Me
                </h2>
                <div className="section-line"></div>
                <p style={{color: '#a8b2d1', textAlign: 'center', marginTop: '1rem'}}>
                    Get to know Santosh Bhandari and his development journey</p>
            </div>

            <div className="about-wrapper" data-aos="fade-up" data-aos-delay="200">
                <div className="about-content">
                    <div className="about-text">
                        <div className="code-block">
                            <div className="code-header">
                                <span className="file-name">developer.py</span>
                                <div className="code-actions">
                                    <i className="bi bi-files"></i>
                                    <i className="bi bi-play-fill"></i>
                                </div>
                            </div>
                            <div className="code-content">
                                <pre><code className="language-python">
                                    {`
                                    class FullStackDeveloper:
                                        def __init__(self):
                                            self.name = "Santosh Bhandari"
                                            self.role = "Full-Stack Developer"
                                            self.location = "Nepal"
                                            self.languages = ["Python", "JavaScript"]
                                            self.frameworks = ["Django","Django Rest Framework", "FastAPI", "Flask"]
                                            self.frontend = ["HTML5", "CSS3", "React.js"]
                                            self.databases = ["PostgreSQL","MySQL", "MongoDB", "Redis"]
                                            self.tools = ["Git", "Docker", "Linux"]
                                            self.specialty = "Backend-focused full-stack"
                                            self.current_focus = "Building scalable web applications"

                                        def get_bio(self):
                                            return (
                                            """
                                            Passionate full-stack developer with strong backend expertise.
                                            I love building scalable APIs, optimizing databases, and creating
                                            responsive user interfaces. Always eager to learn and solve
                                            challenging problems through clean, efficient code.
                                            """
                                            )

                                        def get_skills(self):
                                            return {
                                            "backend": self.languages + self.frameworks,
                                            "frontend": self.frontend,
                                            "databases": self.databases,
                                            "tools": self.tools,
                                            }

                                        def is_available_for_work(self):
                                            return True  # Always ready for new opportunities!`}
                                </code></pre>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="about-description">
                            <h2>About Santosh Bhandari - My Development Journey</h2>
                            <p>Welcome to my personal portfolio! I'm <strong>Santosh Bhandari</strong>, a passionate
                                <strong>Full-Stack Developer</strong> based in
                                <strong>Jhapa, Nepal</strong>. I specialize in creating robust backend systems and
                                elegant frontend interfaces, building scalable APIs, optimizing databases, and crafting
                                responsive user experiences. This portfolio showcases my expertise, projects, and
                                professional journey in web development.</p>

                            <div className="journey-highlights">
                                <article className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <h3>Santosh Bhandari's Full-Stack Expertise</h3>
                                        <p>Proficient in Python, and JavaScript with modern frameworks like Django,
                                            FastAPI, and React.js</p>
                                    </div>
                                </article>

                                <article className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="bi bi-database"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <h3>Database Optimization Specialist</h3>
                                        <p>Expert in PostgreSQL, MongoDB, and Redis performance tuning with years of
                                            hands-on experience</p>
                                    </div>
                                </article>

                                <article className="highlight-item">
                                    <div className="highlight-icon">
                                        <i className="bi bi-lightning"></i>
                                    </div>
                                    <div className="highlight-text">
                                        <h3>Professional API Development</h3>
                                        <p>Building high-performance RESTful and GraphQL APIs for clients worldwide from
                                            Nepal</p>
                                    </div>
                                </article>
                            </div>
                            {/* <!-- Download CV block --> */}
                            <div className="download-cv" data-aos="fade-up" data-aos-delay="150">
                                <div className="cv-text">Prefer a quick overview?</div>
                                <div className="cv-actions">
                                    <a href="files/cv.pdf" target="_blank" className="btn-secondary">
                                        <i className="bi bi-file-earmark-text"></i>
                                        View CV
                                    </a>
                                    <a href="files/cv.pdf" download className="btn-primary">
                                        <i className="bi bi-download"></i>
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutSection
