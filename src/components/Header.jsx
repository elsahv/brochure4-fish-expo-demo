import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between p-4 ">
      <div className="font-bold">HoveyRoofing</div>
      <div className="flex">
        <div className="px-1">about</div>
        <div className="px-1">roof styles</div>
      </div>
      <div>
        <button className="p-2 bg-black text-white">Contact Us</button>
      </div>
    </nav>
  );
};

export default Header;
