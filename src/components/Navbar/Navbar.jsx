import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar-logo">
        <h1>UDIT KUMAR NAYAK</h1>
      </div>
      <nav>
        <ul className="Navbar-nav">
          <li className="nav-item">
            <a href="/">
              <i className="fas fa-home"></i>Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about">
              <i className="fas fa-user"></i>About
            </a>
          </li>
          <li className="nav-item">
            <a href="/projects">
              <i className="fas fa-code"></i> Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/resume">
              <i className="fas fa-file-alt"></i>Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
