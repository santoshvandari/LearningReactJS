import React from 'react'

export default function SkillSection() {
    return (
        <section id="skills">
            <div class="section-header" data-aos="fade-up">
                <h2 class="section-title">
                    <span class="section-number">02.</span>
                    Santosh Bhandari's Technical Skills
                </h2>
                <div class="section-line"></div>
                <p style="color: #a8b2d1; text-align: center; margin-top: 1rem;">Professional expertise and technical
                    competencies</p>
            </div>

            <div class="skills-wrapper">
                <div class="skills-categories">
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
                        <div class="category-header">
                            <i class="bi bi-code-slash"></i>
                            <h3>Programming Languages</h3>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span class="skill-name">Python</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">JavaScript</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">PHP</span>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
                        <div class="category-header">
                            <i class="bi bi-stack"></i>
                            <h3>Frameworks & Tools</h3>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span class="skill-name">Django</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">FastAPI</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">Flask</span>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
                        <div class="category-header">
                            <i class="bi bi-database"></i>
                            <h3>Databases</h3>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span class="skill-name">PostgreSQL</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">MongoDB</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">MySQL</span>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-aos="fade-up" data-aos-delay="400">
                        <div class="category-header">
                            <i class="bi bi-layout-text-window-reverse"></i>
                            <h3>Frontend Technologies</h3>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span class="skill-name">HTML5</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">CSS3</span>
                            </div>
                            <div class="skill-item">
                                <span class="skill-name">React.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
