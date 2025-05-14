import React, { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Assets } from '../assets/asset';

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [showMenu, setShowMenu] = useState(false); // Toggle for menu
  const [token, setToken] = useState(true); // Logged-in state

  const handleCreateAccount = () => {
    navigate("/login"); // Redirect to login page
  };

  const handleLogout = () => {
    setToken(false); // Set token to false when logging out
    setShowMenu(false); // Hide the dropdown
    navigate("/"); // Redirect to the home page or login page
  };

  const handleProfileClick = (path) => {
    navigate(path); // Navigate to the desired page
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      
      {/* Logo Section with Ayurplus Title */}
      <div className="flex items-center gap-2">
        <img  src={Assets.Logo} alt="Logo" className="w-30 h-20 cursor-pointer" />
        <span 
  onClick={() => navigate('/')} 
  className="text-3xl font-bold text-green-600 cursor-pointer"
>
  Ayurplus
</span>
      </div>

      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li>
          <NavLink to="/" className="flex flex-col items-center group">
            HOME
            <span className="block h-0.5 bg-primary w-3/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="doctors" className="flex flex-col items-center group">
            ALL DOCTORS
            <span className="block h-0.5 bg-primary w-3/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </NavLink>
          </li>
          <li>
          <NavLink to="/Medicine" className="flex flex-col items-center group">
            GET MEDICINES
            <span className="block h-0.5 bg-primary w-3/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/about" className="flex flex-col items-center group">
            ABOUT
            <span className="block h-0.5 bg-primary w-3/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center group">
            CONTACT
            <span className="block h-0.5 bg-primary w-3/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
          </NavLink>
        </li>
      </ul>

      <div className="hidden md:block">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={Assets.profile} alt="Profile" className="w-10 h-10 rounded-full" />
            <img src={Assets.dicon} alt="Icon" className="w-5 h-5" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p 
                  onClick={() => handleProfileClick('/my-profile')} 
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p 
                  onClick={() => handleProfileClick('/my-appointments')} 
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p 
                  onClick={handleLogout} 
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={handleCreateAccount} 
            className="bg-primary text-white px-8 py-3 rounded-full font-light"
          >
            Create Account
          </button>
        )}
      </div>

    </div>
  );
}

export default Navbar;
