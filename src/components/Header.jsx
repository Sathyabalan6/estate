import './Header.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

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
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/map">Map</Link>
        <Link to="/documents">Documents</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/tender">Tender</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;