import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white font-[inter]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="container mx-auto bg-[#1F2937] text-center py-36">
          <h3 className="uppercase mb-5 text-xl">contact us</h3>
          <div className="space-y-2 text-lg">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="container mx-auto bg-[#111827] text-center py-36">
          <h3 className="uppercase mb-5 text-xl">Follow US</h3>
          <p className="mb-5 text-lg">Join us on social media</p>
          <div className="flex justify-center items-center gap-2">
            <p>facebook</p>
            <p>facebook</p>
            <p>facebook</p>
          </div>
        </div>
      </div>
      <div className="bg-[#111827] text-center py-4 flex flex-col items-center justify-center">
        <p className="text-lg">
          Copyright © {new Date().getFullYear()} || All rights reserved Emran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
