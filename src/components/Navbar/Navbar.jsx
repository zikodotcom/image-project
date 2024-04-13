import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Button from "../Shared/Button";
import { Link } from 'react-router-dom';

const Navbar = ({ handleOrderPopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchHover = () => {
    setIsSearchHovered(!isSearchHovered);
  };

  return (
    <nav className="bg-gray-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" id='logo'>
            <a href="/" className="flex items-center text-green-700">
              <span className="mr-0" id="LOGOT">H</span>
              <IoHome className="text-xl" id="LOGO" />
              <span className="mr-0" id="LOGOT">ME</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
          <Link to="/"  className="text-green-700" id='nav-link'>Home</Link>
           <Link to="/about" className="text-green-700" id='nav-link'>About US</Link>
            <Link to="/shop" className="text-green-700" id='nav-link'>Shop</Link> {/* Utilisez un lien simple */}
            <a href="/" className="text-green-700" id='nav-link'>Log In </a>
            <FaUser className="text-zinc-950 cursor-pointer" id='nav-link' />
            <div
              className="flex items-center border p-1 rounded-full"
              onMouseEnter={handleSearchHover}
              onMouseLeave={handleSearchHover}
            >
              <FaSearch className="text-zinc-950 cursor-pointer"  />
              {isSearchHovered && (
                <input type="text" placeholder="Search..." className="outline-none ml-1 text-xs" />
              )}
            </div>
            <div className='w-28 text-xs'>
            <Button
            
            text="Contact Us"
            bgColor="bg-zinc-950"
            textColor="text-white"
            handler={handleOrderPopup}
          />
            </div>
           
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleDropdown} className="text-green-700">
              {isDropdownOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <div className="ml-10 flex flex-col space-y-2">
              <a href="/" className="text-green-700">Home</a>
              <a href="/" className="text-green-700">About</a>
              <a href="/shop" className="text-green-700">Services</a> {/* Utilisez un lien simple */}
              <a href="/" className="text-green-700">Contact</a>

              <Button
                text="Contact Us"
                bgColor="bg-zinc-950"
                textColor="text-white"
                handler={handleOrderPopup}
                
              />
            </div>
          </div>
        )}
      </div>
     
    </nav>
  );
};

export default Navbar;



