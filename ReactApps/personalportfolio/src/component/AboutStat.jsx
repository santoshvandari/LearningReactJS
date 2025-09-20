import CVData from "./CVData"

const JourneyHighlights = [
    {
        "title": "Santosh Bhandari's Full-Stack Expertise",
        "description": "Proficient in Python, and JavaScript with modern frameworks like Django, FastAPI, and React.js",
        "icon": "bi-code-slash"
    },
    {
        "title": "Database Optimization Specialist",
        "description": "Expert in PostgreSQL, MongoDB, and Redis performance tuning with years of hands-on experience",
        "icon": "bi-database"
    },
    {
        "title": "Professional API Development",
        "description": "Building high-performance RESTful and GraphQL APIs for clients worldwide from Nepal",
        "icon": "bi-lightning"
    }
]

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
                    {JourneyHighlights.map((item) => (
                        <article className="highlight-item" key={item.title}>
                            <div className="highlight-icon">
                                <i className={`bi ${item.icon}`}></i>
                            </div>
                            <div className="highlight-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <CVData />
            </div>
        </div>
    )
}

export default AboutStat
