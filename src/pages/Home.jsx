import React from 'react';
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
  const teamMembers = [
    { name: 'Dr. R. Vidhya', designation: 'Professor and Estate Officer', image: vidhya },
    { name: 'Dr.S.Jayalakshimi', designation: 'Assistant Executive Engineer (Civil)', image: jayalakshmi },
    { name: 'Dr.S. Karthikeyan', designation: 'Assistant Executive Engineer (Civil)', image: karthikeyan },
    { name: 'Dr.V.Lenin Kalyanasundaram', designation: 'Assistant Executive Engineer (Civil)', image: Lenin },
    { name: 'Dr.M.S.Karthikeyan', designation: 'Assistant Executive Engineer (Civil)', image: MSKarthikeyan },
    { name: 'Dr.V.Jawahar Senthilkumar', designation: 'Assistant Executive Engineer (Electrical)', image: Jawahar },
    { name: 'Dr.A.Sivaprakasam', designation: 'Assistant Executive Engineer (Electrical)', image: Sivaprakasam },
    { name: 'Dr.K.Arul Deepa', designation: 'Assistant Executive Engineer (Computerization & Documentation)', image: ArulDeepa },
  ];
  
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
    <div className="font-sans text-white">
      {/* Section 1 - Hero Section */}
      <section 
        className="h-[90vh] bg-cover bg-center flex justify-center items-center text-center"
        style={{ backgroundImage: `url(${group4})` }}
      >
        <div className="hero-text">
          <h1 className="text-5xl mb-2.5 [text-shadow:2px_2px_4px_black]">ESTATE OFFICE</h1>
          <p className="text-xl max-w-[700px] mx-auto [text-shadow:1px_1px_3px_black]">
            (Providing and Maintaining Class Infrastructure & Facilitating Clean, Green and Safe Campuses)
          </p>
        </div>
      </section>

      {/* Section 2 - About Section */}
      <section 
        className="w-full h-screen bg-cover bg-fixed bg-no-repeat flex items-center justify-center px-5"
        style={{ backgroundImage: `url(${group7})` }}
      >
        <div className="max-w-[1000px] font-bold mx-auto bg-black/50 p-10 rounded-xl leading-8 text-base">
          <h2 className="text-4xl mb-5">All About <u>Estate office</u></h2>
          <p className="mb-4">
            After the formation of Anna University in September 1978, the Maintenance cell initially functioned under the leadership of an Executive Engineer deputed from TNPWD. In 1994, the Estate office was headed by an Estate Officer—a Professor in Civil Engineering of the University—with PWD Engineers on deputation working under him.
          </p>
          <p className="mb-4">
            Since 2000, the Estate Office has been a full-fledged integral unit of the University with permanent Civil/Electrical engineers and dedicated accounting and drawing sections. Since then, construction activities, maintenance of buildings, water supply, sewage treatment, disposal, electrical supply and maintenance, and gardening have all come under its purview.
          </p>
          <p>
            The University has witnessed unprecedented infrastructure development with planning, design, and supervision by the Estate Office since 1994. This report highlights major construction projects executed by the Estate Office through TNPWD and the minor works and maintenance activities carried out by the Estate Office team during 2015-2021.
          </p>
        </div>
      </section>

      {/* Section 3 - Our Team */}
      <section className="my-10 max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase text-[#003300]">Our Team</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-[220px] bg-white rounded-lg p-4 shadow-md text-center">
              <div
                className="w-[180px] h-[180px] mx-auto mb-2.5 rounded-full bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="text-sm leading-6 text-gray-700">
                <strong className="block mb-1 font-semibold text-base">{member.name}</strong>
                <span className="italic">{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Gallery Section */}
      <section className="bg-[#d6ffd9] py-8">
        <h2 className="text-center mb-6 text-3xl text-black">Gallery</h2>
        <div className="flex flex-wrap gap-8">
          <aside className="min-w-[150px] bg-[#0b2c06] p-4 text-white">
            <ul>
              <li className="my-2.5 cursor-pointer">Show All</li>
              <li className="my-2.5 cursor-pointer">Food Court</li>
              <li className="my-2.5 cursor-pointer">Housekeeping</li>
              <li className="my-2.5 cursor-pointer">Security</li>
            </ul>
          </aside>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 flex-1">
            <div className="bg-gray-300 h-[100px] rounded-lg"></div>
            <div className="bg-gray-300 h-[100px] rounded-lg"></div>
            <div className="bg-gray-300 h-[100px] rounded-lg"></div>
            <div className="bg-gray-300 h-[100px] rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Section 5 - Road Map */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl text-black text-center md:text-right md:pr-[15%] mb-6 border-b-2 border-[#0b2c06] inline-block pb-1">
          Campus Layout
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <img 
            src={campusMap} 
            alt="Campus Road Map" 
            className="max-w-[400px] w-full border-2 border-gray-300 rounded-lg shadow-md" 
          />
          
          <div className="flex-1 min-w-[300px] bg-[#f0f8ff] rounded-lg p-5 shadow-md">
            <h3 className="text-2xl text-[#003300] text-center mb-4 pb-2.5 border-b-2 border-[#0b2c06]">
              FUNCTIONS OF ESTATE OFFICE
            </h3>
            <ul>
              {estateFunctions.map((func, index) => (
                <li 
                  key={index} 
                  className="py-2 text-gray-700 border-b border-dotted border-gray-300 relative pl-6"
                >
                  <span className="absolute left-1.5 font-bold text-[#0b2c06]">•</span>
                  {func}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-6 mt-8">
          <div className="flex-1 min-w-[300px] bg-[#f0f8ff] rounded-lg p-5 shadow-md border-l-4 border-[#006400]">
            <h3 className="text-2xl text-[#003300] text-center mb-2.5 pb-2.5 border-b-2 border-[#0b2c06]">
              VISION
            </h3>
            <p className="text-gray-700 text-base leading-6 text-justify">
              The Estate office, Anna University supports the four campuses in their pursuit of academic and research excellence by providing environmentally responsible campus management and operations for an effective and enabling ecosystem.
            </p>
          </div>
          
          <div className="flex-1 min-w-[300px] bg-[#f0f8ff] rounded-lg p-5 shadow-md border-l-4 border-[#008080]">
            <h3 className="text-2xl text-[#003300] text-center mb-2.5 pb-2.5 border-b-2 border-[#0b2c06]">
              MISSION
            </h3>
            <p className="text-gray-700 text-base leading-6 text-justify">
              To extend the engineering assistant for the upkeep of clean, green, progressive and sustainable physical environment and campuses leading to academic and research excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Section 6 - Map Integration */}
      <section className="py-8 bg-gray-200 text-center">
        <h2 className="text-3xl mb-4 text-black">Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.622024233973!2d80.23862841430417!3d13.006339317514956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fe963c9df%3A0xd0fd0213bc4e1db1!2sAnna%20University!5e0!3m2!1sen!2sin!4v1617794473411!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Anna University Map"
            className="border-none rounded-xl"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;