import { useContext, useEffect } from "react";
import Toggle from "react-toggle";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = ({ activeSection = 0, scrollToSection }) => {
    const { isDark, setDarkMode } = useContext(AuthContext);
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-bg', 'fixed-header');
            document.body.classList.remove('white-theme');
        } else {
            document.body.classList.add('white-theme', 'fixed-header');
            document.body.classList.remove('dark-bg');
        }
        return () => {
            document.body.classList.remove('dark-bg', 'white-theme', 'fixed-header');
        };
    }, [isDark]);
    return (
        <header className="main-header">
            <nav className="navbar header-nav header-white header-transparent navbar-expand-lg one-page-nav">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <h5 className={isDark ? 'text-white' : ''}>Er Chandra Prakash</h5>
                    </Link>
                    <Toggle
                        checked={Boolean(isDark)}
                        onChange={setDarkMode}
                        icons={{ checked: "🔆", unchecked: "🌙" }}
                        aria-label="Dark mode toggle"
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                        <ul className="navbar-nav ml-auto">
                            <li><a className={`nav-link ${activeSection === 0 ? 'active' : ''}`} onClick={() => scrollToSection(0)}><span>Home {isDark}</span></a></li>
                            <li><a className={`nav-link ${activeSection === 1 ? 'active' : ''}`} onClick={() => scrollToSection(1)}><span>About Us</span></a></li>
                            <li><a className={`nav-link ${activeSection === 2 ? 'active' : ''}`} onClick={() => scrollToSection(2)}><span>Services</span></a></li>
                            <li><a className={`nav-link ${activeSection === 3 ? 'active' : ''}`} onClick={() => scrollToSection(3)}><span>Portfolio</span></a></li>
                            <li><a className={`nav-link ${activeSection === 4 ? 'active' : ''}`} onClick={() => scrollToSection(4)}><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header