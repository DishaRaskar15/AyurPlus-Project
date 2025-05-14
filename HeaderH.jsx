import React from 'react'
import { Assets } from '../assets/asset'

function HeaderH() {
  console.log('HeaderH component rendering'); // Debug line

  return (
    <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-2xl px-8 md:px-16 lg:px-24 py-12 gap-10">
      {/*------------- Left Side ---------------*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6">
        <p className="text-4xl font-bold text-green-800">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 text-green-700 text-sm font-light">
          <img src={Assets.group_profiles} alt="Group Profiles" className="w-28" />
          <p className="text-green-700 text-lg">
            Welcome to Ayurplus, your digital gateway to personalized Ayurvedic healthcare. <br className='hidden sm:block'/>
            Book appointments, explore remedies, and consult with expert doctors, all from the comfort of your home.
          </p>
        </div>

        <a 
          href="#speciality"
          className="flex items-center gap-2 text-white bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Book Appointment 
          <img src={Assets.arrow_icon} alt="Arrow" className="w-5 h-5" />
        </a>
      </div>

      {/*------------- Right Side ---------------*/}
      <div className="md:w-1/2 flex justify-center">
        <img 
          className="w-full max-w-[400px] h-auto rounded-2xl object-cover" 
          src={Assets.header_img} 
          alt="Header"
        />
      </div>
    </div>
  );
}

export default HeaderH;
