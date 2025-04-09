import React from 'react';
import './Footer.css';

export default function EstateOfficeFooter() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <div className="top-content">
            <img 
              src="src/assets/logo.png" 
              alt="Anna University Logo" 
              className="university-logo"
            />
            <div className="title-container">
              <h2 className="office-title">Estate office</h2>
              <p className="university-name">Anna University, Chennai</p>
            </div>
          </div>
          
          <div className="bottom-content">
            <p className="copyright-text">Copyright © 2023 Estate Office. All rights reserved.</p>
            <div className="dev-team">
              <p className="team-heading">Development Team:</p>
              <ul className="team-list">
                <li>Srinithish MCA (2024-2026) ,</li>
                <li>Gowtham MCA (2024-2026),</li>
                <li>Rajalakshmi MCA (2024-2026),</li>
                <li>Prabeen MCA (2024-2026)</li>
              </ul>
            </div>
            <div className="info-block">
            <h3 className="section-heading">Location</h3>
            <p className="info-text">Estate office, Anna University, Guindy, Chennai 600025</p>
          </div>

          </div>
        </div>
        
        {/* Right Section */}
        <div className="right-section">
                    
          <div className="info-block">
            <h3 className="section-heading">More info</h3>
            <div className="contact-details">
              <p><span className="label">Phone:</span> 044-22357898</p>
              <p><span className="label">Email:</span> eo@annauniv.edu</p>
              <p><span className="label">Civil Compliants:</span>044-22357894</p>
              <p><span className="label">Electrical Complaints:</span> 044-22357893</p>
            </div>
          </div>
          
          <div className="info-block">
            <h3 className="section-heading">Social</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Social Icon"></a>
              <a href="#" className="social-icon" aria-label="Social Icon"></a>
              <a href="#" className="social-icon" aria-label="Social Icon"></a>
              <a href="#" className="social-icon" aria-label="Social Icon"></a>
              <a href="#" className="social-icon" aria-label="Social Icon"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}