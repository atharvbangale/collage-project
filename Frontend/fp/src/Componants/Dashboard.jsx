import React from 'react';
import serchicon from '../assets/search.svg';
import screen from '../assets/dash2.jpg'; 

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${screen})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-700 opacity-25 z-0"></div>

      {/* Navigation Bar */}
      <header className="h-24 w-full relative border-b bg-transparent backdrop-blur-xl z-10">
        <nav className="flex justify-between items-center h-full px-10 text-sm md:text-base">
          {/* Left Nav */}
          <div className="flex space-x-9 font-extrabold">
            <p className="hover:text-blue-400 cursor-pointer">Raise Capital</p>
            <p className="hover:text-blue-400 cursor-pointer">Browse Company</p>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extralight cursor-pointer">
            FUNDO
          </div>

          {/* Right Nav */}
          <div className="flex items-center space-x-6 font-extrabold">
            <p className="hover:text-blue-400 cursor-pointer">Sign In</p>
            <div className="border-2 border-white w-[120px] h-[35px] flex items-center justify-center hover:bg-blue-500 hover:border-transparent cursor-pointer transition">
              Get Started
            </div>
            <img src={serchicon} alt="Search" className="w-5 h-5 cursor-pointer invert" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl px-8 py-20 mx-auto">
        {/* Left Content */}
        <div className="flex-1 text-left mb-10 md:mb-0 pt-70">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Startup Fundraising Platform
          </h1>
          <p className="text-xl mb-10 max-w-md">
            Start and manage a professional fundraise to attract quality accredited investors.
          </p>
          <button className="bg-blue-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 cursor-pointer">
            GET STARTED
          </button>
        </div>

        {/* Right Graphic Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Invisible Placeholder Image */}
          <div
            className="w-96 h-96 bg-cover bg-center rounded-full opacity-0"
            style={{ backgroundImage: 'url("https://via.placeholder.com/400x400?text=Hand+Image")' }}
          ></div>

          {/* Raised Amount Circle */}
          <div className="absolute  bottom-0 right-0  bg-transparent opacity-100 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-xl ring-4">
            <span className="text-lg font-semibold text-white">Raised</span>
            <span className="text-4xl font-bold text-white mt-1 cursor-crosshair">$2,000,000</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
