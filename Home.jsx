import React from 'react';
import HeaderH from '../COMPONENTS/HeaderH';
import SpecialityMenu from '../COMPONENTS/SpecialityMenu';
import TopDoctors from '../COMPONENTS/TopDoctors';
import Footer from '../COMPONENTS/Footer';

const Home = () => {
  return (
    <div>
      <HeaderH />
      <SpecialityMenu/>
      <TopDoctors/>
      <Footer/>
    </div>
  );
};

export default Home;
