import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './PAGES/Home';
import Doctors from './PAGES/Doctors';
import Login from './PAGES/Login';
import About from './PAGES/About';
import Contact from './PAGES/Contact';
import MyProfile from './PAGES/MyProfile';
import MyAppointments from './PAGES/MyAppointments';
import Appointments from './PAGES/Appointments';
import Navbar from './COMPONENTS/Navbar';
import HeaderH from './COMPONENTS/HeaderH';
import SpecialityMenu from './COMPONENTS/SpecialityMenu';
import TopDoctors from './COMPONENTS/TopDoctors';
import  AppContext  from './context/AppContext';
import Footer from './COMPONENTS/Footer';
import Medicine from './PAGES/Medicine';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} /> {/* Home route is now at '/' */}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointents/:docId' element={<Appointments />} />
        <Route path='/medicine' element={<Medicine/>}/>
      </Routes>
    </div>
  );
};

export default App;

