import React, { use, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
function TopDoctors() {

  const Navigate =useNavigate()
  const {doctors}= useContext(AppContext)


  return (
    <div className="flex flex-col items-center gap-8 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-bold text-center">Top Doctors to Book</h1>
      <p className="text-center text-gray-600 mb-8">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>Navigate('/Appointments')}
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-primary"
            />
            <div className="mt-4 text-center">
              <div className="flex justify-center items-center gap-2 mb-2 text-sm text-green-500">
                <p>Available</p>
              </div>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDoctors;
