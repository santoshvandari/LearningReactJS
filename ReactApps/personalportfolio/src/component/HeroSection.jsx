import HeroDescription from "./HeroDescription"
import ImageSection from "./ImageSection"
import ScrollIndicator from "./ScrollIndicator"

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
                        <ImageSection />

                        <HeroDescription />
                    </div>
                </div>

                <ScrollIndicator />
            </div>
        </section>
    )
}

export default HeroSection
