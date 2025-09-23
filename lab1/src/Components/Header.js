const Header = () => { // Functional component for the header
    const scrollToSection = (sectionId) => { // Function to handle smooth scrolling
        const element = document.getElementById(sectionId); // Get the target section by ID

        // If the element exists, scroll to it smoothly
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className="sticky-top" style={{backgroundColor: '#4169E1'}}> 
            <nav className="navbar navbar-expand-lg navbar-dark" style={{fontFamily: 'Arial, sans-serif'}}>
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 text-white" href="#home" style={{letterSpacing: '1px'}}>
                        Midterm Lab 1
                    </a>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-white fw-medium"
                                style={{letterSpacing: '0.5px'}}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                onClick={() => scrollToSection('home')}
                            >
                                Home
                            </button>
                        </li>

                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-white fw-medium"
                                style={{letterSpacing: '0.5px'}}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                onClick={() => scrollToSection('about')}
                            >
                                About
                            </button>
                        </li>

                        <li className="nav-item">
                            <button 
                                className="nav-link btn btn-link text-white fw-medium"
                                style={{letterSpacing: '0.5px'}}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;