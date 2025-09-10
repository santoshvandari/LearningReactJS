import React from 'react'

const Skills = [
    {
        category: "Programming Languages",
        icon: "bi-code-slash",
        items: ["Python", "JavaScript", "PHP"]
    },
    {
        category: "Frameworks & Tools",
        icon: "bi-stack",
        items: ["Django", "FastAPI", "Flask"]
    },
    {
        category: "Databases",
        icon: "bi-database",
        items: ["PostgreSQL", "MongoDB", "MySQL"]
    }
]


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
                    {
                        Skills.map((skill, index) => (
                            <div class="skill-category" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                <div class="category-header">
                                    <i class={`bi ${skill.icon}`}></i>
                                    <h3>{skill.category}</h3>
                                </div>
                                <div class="skills-list">
                                    {
                                        skill.items.map(item => (
                                            <div class="skill-item">
                                                <span class="skill-name">{item}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
  )
}
