import React from 'react';
import { specialityData } from '../assets/asset';
import { Link } from 'react-router-dom';

function SpecialityMenu() {
  return (
    <div id="speciality" className="py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Find by Speciality</h1>
      <p className="text-center text-gray-500 mb-8">
        Simply browse through our list of trusted doctors and schedule your appointment hassle-free.
      </p>

      {/* Centered Horizontal Scroll Line */}
      <div className="flex justify-center">
        <div className="flex gap-10 px-4 overflow-scroll">
          {specialityData.map((item, index) => (
            <Link 
            onClick={()=>scrollTo(0,0)} key={index} to={`/doctors/${item.speciality.toLowerCase().replace(/ /g, '-')}`}
              className="flex flex-col items-center flex-shrink-0 gap-2 hover:scale-105 `transition"
            >
              <img 
                src={item.image} 
                alt={item.speciality} 
                className="w-24 h-24   object-contain rounded-full bg-gray-100 p-2"
              />
              <p className="text-primary font-semibold text-center">{item.speciality}</p>
            </Link>
          ))}
          
        </div>
        
      </div>
      
    </div>
    
  );
}

export default SpecialityMenu;
