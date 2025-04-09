import React from 'react';
import './Home.css';

import group4 from '../assets/bg-home.jpeg';
import group7 from '../assets/R.jpeg';

import vidhya from '../assets/vidhya.jpg';
import jayalakshmi from '../assets/jayalakshmi.jpg';
import karthikeyan from '../assets/karthikeyan.jpg';
import Lenin from '../assets/Lenin.jpg';
import MSKarthikeyan from '../assets/MSKarthikeyan.jpg';
import Jawahar from '../assets/Jawahar.jpg';
import Sivaprakasam from '../assets/Sivaprakasam.jpg';
import ArulDeepa from '../assets/ArulDeepa.jpg';

import campusMap from '../assets/campus.jpg';

function Home() {
  // Define the team members data array
  const teamMembers = [
    {
      name: 'Dr. R. Vidhya',
      designation: 'Professor and Estate Officer',
      image: vidhya,
    },
    {
      name: 'Dr.S.Jayalakshimi',
      designation: 'Assistant Executive Engineer (Civil)',
      image: jayalakshmi,
    },
    {
      name: 'Dr.S. Karthikeyan',
      designation: 'Assistant Executive Engineer (Civil)',
      image: karthikeyan,
    },
    {
      name: 'Dr.V.Lenin Kalyanasundaram',
      designation: 'Assistant Executive Engineer (Civil)',
      image: Lenin,
    },
    {
      name: 'Dr.M.S.Karthikeyan',
      designation: 'Assistant Executive Engineer (Civil)',
      image: MSKarthikeyan,
    },
    {
      name: 'Dr.V.Jawahar Senthilkumar',
      designation: 'Assistant Executive Engineer (Electrical)',
      image: Jawahar,
    },
    {
      name: 'Dr.A.Sivaprakasam',
      designation: 'Assistant Executive Engineer (Electrical)',
      image: Sivaprakasam,
    },
    {
      name: 'Dr.K.Arul Deepa',
      designation: 'Assistant Executive Engineer (Computerization & Documentation)',
      image: ArulDeepa,
    },
  ];
  
  // Functions of Estate Office
  const estateFunctions = [
    "Construction and Maintenance of Building",
    "Maintaining water supply, sewage treatment and disposal",
    "Maintenance of electrical system",
    "Construction and Maintenance of roads",
    "Maintaining Lawns, gardens and other places",
    "Monitoring and Rent collection of central facilities",
    "Housekeeping",
    "Security",
    "Operation of Food courts",
    "Quarters Allotments"
  ];
  
  return (
    <div className="home-wrapper">
      {/* Section 1 - Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${group4})` }}
      >
        <div className="hero-text">
          <h1>ESTATE OFFICE</h1>
          <p>(Providing and Maintaining Class Infrastructure & Facilitating Clean, Green and Safe Campuses)</p>
        </div>
      </section>

      {/* Section 2 - About Section */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${group7})` }}
      >
        <div className="about-content">
          <h2>All About <u>Estate office</u></h2>
          <p>
            After the formation of Anna University in September 1978, the Maintenance cell initially functioned under the leadership of an Executive Engineer deputed from TNPWD. In 1994, the Estate office was headed by an Estate Officer—a Professor in Civil Engineering of the University—with PWD Engineers on deputation working under him.
          </p>
          <p>
            Since 2000, the Estate Office has been a full-fledged integral unit of the University with permanent Civil/Electrical engineers and dedicated accounting and drawing sections. Since then, construction activities, maintenance of buildings, water supply, sewage treatment, disposal, electrical supply and maintenance, and gardening have all come under its purview.
          </p>
          <p>
            The University has witnessed unprecedented infrastructure development with planning, design, and supervision by the Estate Office since 1994. This report highlights major construction projects executed by the Estate Office through TNPWD and the minor works and maintenance activities carried out by the Estate Office team during 2015-2021.
          </p>
        </div>
      </section>

      {/* Section 3 - Our Team */}
      <section className="team-section">
        <h2><u>Our Team</u></h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              />
              <div className="member-info">
                <strong>{member.name}</strong>
                <br />
                <span>{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-container">
          <aside className="gallery-filters">
            <ul>
              <li>Show All</li>
              <li>Food Court</li>
              <li>Housekeeping</li>
              <li>Security</li>
            </ul>
          </aside>
          <div className="gallery-grid">
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
          </div>
        </div>
      </section>

      {/* Section 5 - Road Map */}
      <section className="road-map-section">
        {/* <div className="campus-layout-title"> */}
          <h2>Campus Layout</h2>
        {/* </div> */}
        
        <div className="map-functions-container">
          <img src={campusMap} alt="Campus Road Map" className="road-map-image" />
          
          <div className="estate-functions">
            <h3>FUNCTIONS OF ESTATE OFFICE</h3>
            <ul>
              {estateFunctions.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="vision-mission">
          <div className="vision">
            <h3>VISION</h3>
            <p>The Estate office, Anna University supports the four campuses in their pursuit of academic and research excellence by providing environmentally responsible campus management and operations for an effective and enabling ecosystem.</p>
          </div>
          
          <div className="mission">
            <h3>MISSION</h3>
            <p>To extend the engineering assistant for the upkeep of clean, green, progressive and sustainable physical environment and campuses leading to academic and research excellence.</p>
          </div>
        </div>
      </section>
      
      {/* Section 6 -Map Integration */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.622024233973!2d80.23862841430417!3d13.006339317514956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fe963c9df%3A0xd0fd0213bc4e1db1!2sAnna%20University!5e0!3m2!1sen!2sin!4v1617794473411!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Anna University Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;