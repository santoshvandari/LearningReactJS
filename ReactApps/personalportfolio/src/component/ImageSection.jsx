import React from 'react'

function ImageSection() {
    return (
        <div className="image-container">
            <div className="profile-ring"></div>
            <div className="image">
                <img src="public/img.png"
                    alt="Santosh Bhandari - Professional Backend Developer and Full-Stack Engineer from Nepal"
                    loading="eager" width="200" height="200" />
            </div>
            <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for work</span>
            </div>
        </div>
    )
}

export default ImageSection
