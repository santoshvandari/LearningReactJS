const ProfessionCardInfo = [
    {
        "serviceTitle": "API Development",
        "servicePreview": "RESTful & GraphQL APIs",
        "iconClass": "bi bi-code",
        "description": "Building robust, scalable APIs using modern frameworks like FastAPI, Django REST, and GraphQL. Focus on performance, security, and documentation.",
        "features": [
            "RESTful API Design",
            "GraphQL Implementation",
            "API Documentation",
            "Rate Limiting & Security"
        ]
    },
    {
        "serviceTitle": "Database Design",
        "servicePreview": "Optimized Data Architecture",
        "iconClass": "bi bi-database",
        "description": "Designing efficient database schemas and optimizing queries for maximum performance. Experience with both SQL and NoSQL databases.",
        "features": [
            "Schema Design",
            "Query Optimization",
            "Database Migration",
            "Performance Tuning"
        ]
    },
    {
        "serviceTitle": "Full-stack Development",
        "servicePreview": "End-to-End Web Solutions",
        "iconClass": "bi bi-layers",
        "description": "Building complete web applications from frontend to backend, with expertise in modern technologies and best practices.",
        "features": [
            "React.js Applications",
            "Responsive UI/UX",
            "API Integration",
            "Full-stack Architecture"
        ]
    },
    {
        "serviceTitle": "System Integration",
        "servicePreview": "Seamless Connectivity",
        "iconClass": "bi bi-gear",
        "description": "Connecting different systems and services to work together seamlessly. ETL processes, data synchronization, and third-party integrations.",
        "features": [
            "Third-party API Integration",
            "ETL Development",
            "Data Synchronization",
            "Legacy System Migration"
        ]
    },
    {
        "serviceTitle": "Mobile Backend",
        "servicePreview": "App Backend Services",
        "iconClass": "bi bi-phone",
        "description": "Building robust backend services for mobile applications with real-time features, push notifications, and offline synchronization.",
        "features": [
            "Real-time Communications",
            "Push Notifications",
            "Offline Data Sync",
            "Mobile API Optimization"
        ]
    },
    {
        "serviceTitle": "Security & Performance",
        "servicePreview": "Secure & Fast Systems",
        "iconClass": "bi bi-shield-check",
        "description": "Implementing security best practices and optimizing system performance for high-traffic applications.",
        "features": [
            "Security Audits",
            "Performance Optimization",
            "Load Testing",
            "Security Implementation"
        ]
    }

]

export default function ProfessionalSection() {
    return (
        <section id="services">
            <div class="section-header" data-aos="fade-up">
                <h2 class="section-title">
                    <span class="section-number">03.</span>
                    Professional Services by Santosh Bhandari
                </h2>
                <div class="section-line"></div>
                <p style="color: #a8b2d1; text-align: center; margin-top: 1rem;">Backend development and full-stack
                    solutions</p>
            </div>

            <div class="services-wrapper">
                <div class="services-grid">
                    {
                        ProfessionCardInfo.map((card, index) => (
                            <div class="service-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                                <div class="card-inner">
                                    <div class="card-front">
                                        <div class="service-icon">
                                            <i class={card.iconClass}></i>
                                        </div>
                                        <h3 class="service-title">{card.serviceTitle}</h3>
                                        <p class="service-preview">{card.servicePreview}</p>
                                        <div class="card-overlay">
                                            <span>Learn More</span>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <h3>{card.serviceTitle}</h3>
                                        <p>{card.description}</p>
                                        <ul>
                                            {card.features.map((feature, fIndex) => (
                                                <li key={fIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
