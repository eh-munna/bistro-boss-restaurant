import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
