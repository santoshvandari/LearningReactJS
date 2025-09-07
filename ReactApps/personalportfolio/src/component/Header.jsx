const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h1><a href="#home" className="logo-text">
                        <span className="bracket">&lt;</span>
                        <span className="name">Santosh</span>
                        <span className="bracket">/&gt;</span>
                    </a></h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#services" className="nav-link">Services</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="menu-option">
                    <div className="hamburger" id="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
