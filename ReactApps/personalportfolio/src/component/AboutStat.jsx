import React from 'react'

const AboutStat = () => {
    return (
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
    )
}

export default AboutStat
