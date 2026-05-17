import React, { useState } from "react";
import burgerMenu from "../images/burger-bar-icon.webp";
import closeButton from "../images/close-icon.webp";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
<>
{/* DESKTOP NAV */} <nav className="fixed top-0 z-50 hidden md:flex items-center bg-slate-950 text-gray-100 py-4 px-6 justify-between w-full shadow-lg">


    {/* Logo */}
    <div className="text-2xl font-bold tracking-wide">
      Xenobyte Web Studio
    </div>

    {/* Links */}
    <div className="flex gap-6 text-lg">
      <a href="#home" className="hover:text-blue-500">Home</a>
      <a href="#packages" className="hover:text-blue-500">Packages</a>
      <a href="#about" className="hover:text-blue-500">About</a>
      <a href="#contact" className="hover:text-blue-500">Contact</a>
    </div>
  </nav>

  {/* MOBILE NAV */}
  <div className="fixed top-0 z-50 flex md:hidden items-center bg-slate-950 text-gray-100 py-3 px-4 justify-between w-full shadow-lg">
    
    {/* Logo */}
    <div className="text-xl font-bold">
      Xenobyte Web Studio
    </div>

    {/* Burger Icon */}
    <img
      src={burgerMenu}
      alt="menu"
      className="w-8 h-8 cursor-pointer"
      onClick={() => setIsOpen(true)}
    />
  </div>

  {/* OVERLAY */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setIsOpen(false)}
    ></div>
  )}

  {/* SIDEBAR */}
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-slate-950 text-white transform transition-transform duration-300 z-50 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Close Button */}
    <div className="flex items-center p-4">
      <img
        src={closeButton}
        alt="close"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>

    {/* Links */}
    <div className="flex flex-col gap-6 px-6 text-lg">
      <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
      <a href="#packages" onClick={() => setIsOpen(false)}>Packages</a>
      <a href="#about" onClick={() => setIsOpen(false)}>About</a>
      <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
    </div>
  </div>
</>


);
}

export default Navbar;
