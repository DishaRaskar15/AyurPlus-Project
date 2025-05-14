import React from 'react';
import { Assets } from '../assets/asset';

function Footer() {
  return (
    <div className="bg-green-900 text-white py-8">
      <div className="container mx-auto flex justify-between px-6">
        {/* ----------Left Section--------- */}
        <div className="w-1/3">
          <img src={Assets.Logo} alt="Logo" className="w-30 h-20 cursor-pointer" />
          <p className="text-sm mt-4">
            Ayurplus is your trusted digital gateway to personalized Ayurvedic healthcare. We connect you with experienced doctors, provide effective remedies, and offer easy appointment scheduling—all from the comfort of your home. Our mission is to bring the wisdom of Ayurveda to your doorstep, offering holistic health solutions for every need.
          </p>
        </div>

        {/* ----------Center Section--------- */}
        <div className="w-1/3 text-center">
          <p className="font-semibold text-lg mb-2">COMPANY</p>
          <ul className="text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----------Right Section--------- */}
        <div className="w-1/3 text-center">
          <p className="font-semibold text-lg mb-2">Get In Touch</p>
          <ul className="text-sm">
            <li>+91 9847352877</li>
            <li>ayurpluscont@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*---------Copyright Text-----------*/}
      <div className="text-center mt-6 text-sm">
        <hr className="border-gray-600 my-2" />
        <p>&copy; 2025 Ayurplus. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
