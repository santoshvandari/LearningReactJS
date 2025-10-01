import React from 'react'

function ScrollIndicator() {
    return (
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
            <div className="scroll-text">Scroll to explore</div>
            <div className="scroll-btn">
                <div className="scroll-arrow">
                    <i className="bi bi-chevron-down"></i>
                </div>
            </div>
            <div className="scroll-hint">Discover my journey</div>
        </div>
    )
}

export default ScrollIndicator
