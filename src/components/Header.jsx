import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="bg-[#022d00] text-white font-sans">
      <div className="flex items-center pb-0">
        <div className="logo-section">
          <img 
            src={logo} 
            alt="Estate Logo" 
            className="h-20 w-auto p-px px-1 mr-5" 
          />
        </div>
        <div className="title-section">
          <h1 className="text-2xl font-bold m-0">Estate office</h1>
          <h2 className="text-lg m-0">Anna University, Chennai</h2>
        </div>
      </div>
      
      <nav className="bg-[#024d00] flex justify-center py-2 px-10 gap-5 flex-wrap justify-between">
        <Link to="/" className="text-white no-underline font-semibold hover:underline">Home</Link>
        <Link to="/about" className="text-white no-underline font-semibold hover:underline">About us</Link>
        <Link to="/properties" className="text-white no-underline font-semibold hover:underline">Properties</Link>
        <Link to="/booking" className="text-white no-underline font-semibold hover:underline">Booking</Link>
        <Link to="/complaints" className="text-white no-underline font-semibold hover:underline">Complaints</Link>
        <Link to="/team" className="text-white no-underline font-semibold hover:underline">Our Team</Link>
        <Link to="/map" className="text-white no-underline font-semibold hover:underline">Map</Link>
        <Link to="/documents" className="text-white no-underline font-semibold hover:underline">Documents</Link>
        <Link to="/gallery" className="text-white no-underline font-semibold hover:underline">Gallery</Link>
        <Link to="/tender" className="text-white no-underline font-semibold hover:underline">Tender</Link>
        <Link to="/faq" className="text-white no-underline font-semibold hover:underline">FAQ</Link>
        <Link to="/login" className="text-white no-underline font-semibold hover:underline">Login</Link>
      </nav>
    </header>
  );
}

export default Header;