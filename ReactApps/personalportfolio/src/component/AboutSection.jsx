import React from 'react'
import AboutStat from './AboutStat'

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

                <AboutStat />
                </div>
            </div>
        </section >
    )
}

export default AboutSection
