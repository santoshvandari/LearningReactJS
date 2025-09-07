const Header = () => {
    return (
        <header>
            <nav>
                <div class="logo">
                    <h1><a href="#home" class="logo-text">
                        <span class="bracket">&lt;</span>
                        <span class="name">Santosh</span>
                        <span class="bracket">/&gt;</span>
                    </a></h1>
                </div>
                <ul class="nav-links">
                    <li><a href="#home" class="nav-link">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#services" class="nav-link">Services</a></li>
                    <li><a href="#skills" class="nav-link">Skills</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                <div class="menu-option">
                    <div class="hamburger" id="menu">
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
