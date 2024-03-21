import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-4">
        <img src="./assests/logo.png" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to bg-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Chetan Is Here</button>
      </div>
      <div className="lg:hidden pt-6">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
