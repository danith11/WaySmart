import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <footer className="w-full bg-gradient-to-b from-[#ffffff] via-5% to-[#e1f0fd] text-[#000000]">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
           <p className="text-xl font-bold">WaySmart</p>
          </div>
          <p className="text-center max-w-xl text-md font-normal leading-relaxed">
             Planning a trip with multiple destinations? Just enter all your stops,
          and WarSmart instantly calculates the most efficient order to visit
          them. Save time, fuel, and hassle.
          </p>
        </div>
        <div className="border-t border-[#3B1A7A]">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            <a href="https://prebuiltui.com">WaySmart</a> ©2025. All rights
            reserved.
          </div>
        </div>
      </footer> */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
        <p className="text-xl">WaySmart</p>
        <p className="mt-4 text-center">
          Copyright © 2025 <a href="https://prebuiltui.com">WaySmart</a>. All
          rights reservered.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <a
            href="/app/about"
            className="font-medium text-gray-800 hover:text-black transition-all"
          >
            About
          </a>
          <div className="h-4 w-px bg-black/20"></div>
          <a
            href="/app/contact-us"
            className="font-medium text-gray-800 hover:text-black transition-all"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
