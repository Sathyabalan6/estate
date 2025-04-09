import './Header.css';
import logo from '../assets/logo.png'; // Make sure this is the university logo

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Estate Logo" className="logo" />
        </div>
        <div className="title-section">
          <h1 className="estate-title">Estate office</h1>
          <h2 className="university-subtitle">Anna University, Chennai</h2>
        </div>
      </div>

      <nav className="nav-bar">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Properties</a>
        <a href="#">Booking</a>
        <a href="#">Complaints</a>
        <a href="#">Our Team</a>
        <a href="#">Map</a>
        <a href="#">Documents</a>
        <a href="#">Gallery</a>
        <a href="#">Tender</a>
        <a href="#">FAQ</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}

export default Header;
