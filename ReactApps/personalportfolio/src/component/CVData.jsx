export default function CVData() {
    return (
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
    )
}
