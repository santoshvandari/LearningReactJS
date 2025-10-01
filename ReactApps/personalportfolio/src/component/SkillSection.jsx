export default function SkillSection() {
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
        },
        {
            category: "Frontend Technologies",
            icon: "bi-layout-text-window-reverse",
            items: ["HTML5", "CSS3", "React.js"]
        }
    ]

    return (
        <section id="skills" >
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">
                    <span className="section-number">02.</span>
                    Santosh Bhandari's Technical Skills
                </h2>
                <div className="section-line"></div>
                <p style={{ color: '#a8b2d1', textAlign: 'center', marginTop: '1rem' }}>
                    Professional expertise and technical
                    competencies</p>
            </div>

            <div className="skills-wrapper">
                <div className="skills-categories">
                    {
                        Skills.map((skill, index) => (
                            <div className="skill-category" data-aos="fade-up" data-aos-delay={`${index * 100}`} key={index}>
                                <div className="category-header">
                                    <i className={`bi ${skill.icon}`}></i>
                                    <h3>{skill.category}</h3>
                                </div>
                                <div className="skills-list">
                                    {
                                        skill.items.map((item, index) => (
                                            <div className="skill-item" key={index}>
                                                <span className="skill-name">{item}</span>
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
