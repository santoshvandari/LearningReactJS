import FloatingIcons from "./FloatingIcons"
import HeroDescription from "./HeroDescription"
import ImageSection from "./ImageSection"
import ScrollIndicator from "./ScrollIndicator"

function HeroSection() {
    return (
        <section id="home">
            <FloatingIcons />
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
