import React from 'react';

export default function EstateOfficeFooter() {
  return (
    <footer className="bg-black text-white text-xs py-6 min-h-auto">
      <div className="w-full max-w-[1200px] mx-auto px-8 flex flex-wrap">
        {/* Left Section */}
        <div className="w-full max-w-full pr-4 md:w-1/2 md:max-w-[50%] lg:w-[45%]">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="src/assets/logo.png" 
              alt="Anna University Logo" 
              className="w-[60px] h-[60px] object-contain"
            />
            <div className="title-container">
              <h2 className="text-[1.75rem] font-bold m-0 leading-tight">Estate office</h2>
              <p className="text-[1.25rem] m-0">Anna University, Chennai</p>
            </div>
          </div>
          
          <div className="mt-2">
            <p className="m-0 mb-2 text-[0.9rem]">Copyright © 2023 Estate Office. All rights reserved.</p>
            <div className="dev-team">
              <p className="font-normal m-0 text-[0.9rem]">Development Team:</p>
              <ul className="list-none p-0 m-0 text-[0.9rem]">
                <li className="mb-1 leading-snug">Srinithish MCA (2024-2026) ,</li>
                <li className="mb-1 leading-snug">Gowtham MCA (2024-2026),</li>
                <li className="mb-1 leading-snug">Rajalakshmi MCA (2024-2026),</li>
                <li className="mb-1 leading-snug">Prabeen MCA (2024-2026)</li>
              </ul>
            </div>
            <div className="info-block mt-4">
              <h3 className="text-[1.75rem] font-bold m-0 mb-2">Location</h3>
              <p className="m-0 text-[0.95rem]">Estate office, Anna University, Guindy, Chennai 600025</p>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full mt-6 flex flex-col md:w-[45%] md:mt-0 lg:w-[45%]">
          <div className="info-block mb-4 lg:mb-3">
            <h3 className="text-[1.75rem] font-bold m-0 mb-2">More info</h3>
            <div className="contact-details">
              <p className="m-0 mb-1 leading-snug"><span className="font-normal">Phone:</span> 044-22357898</p>
              <p className="m-0 mb-1 leading-snug"><span className="font-normal">Email:</span> eo@annauniv.edu</p>
              <p className="m-0 mb-1 leading-snug"><span className="font-normal">Civil Compliants:</span>044-22357894</p>
              <p className="m-0 mb-1 leading-snug"><span className="font-normal">Electrical Complaints:</span> 044-22357893</p>
            </div>
          </div>
          
          <div className="info-block">
            <h3 className="text-[1.75rem] font-bold m-0 mb-2">Social</h3>
            <div className="flex gap-3">
              <a href="#" className="block w-10 h-10 rounded-full bg-gray-400" aria-label="Social Icon"></a>
              <a href="#" className="block w-10 h-10 rounded-full bg-gray-400" aria-label="Social Icon"></a>
              <a href="#" className="block w-10 h-10 rounded-full bg-gray-400" aria-label="Social Icon"></a>
              <a href="#" className="block w-10 h-10 rounded-full bg-gray-400" aria-label="Social Icon"></a>
              <a href="#" className="block w-10 h-10 rounded-full bg-gray-400" aria-label="Social Icon"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}