import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../img/M.png"
import ScrollToTop from "../ScroolTotop/Top";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
    <nav className="bg-gray-100 backdrop-blur-lg  sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
        {/* Logo */}
        <div className="text-gray-800 font-bold text-2xl">
          <NavLink to="/" className="hover:text-blue-600 transition duration-300">
          <img src={logo} className="w-16 h-16"alt="MadTechies" />
            
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 text-lg font-medium">
          <NavLink
            to="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition duration-300"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "hover:text-blue-600 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-gray-800">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white text-gray-800 p-4 rounded-lg shadow-lg absolute right-4 top-16 w-64`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className="block py-2 px-4 text-lg font-medium hover:bg-gray-100 hover:text-blue-600 rounded transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block py-2 px-4 text-lg font-bold text-blue-600 rounded transition duration-300"
              : "block py-2 px-4 text-lg font-medium hover:bg-gray-100 hover:text-blue-600 rounded transition duration-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block py-2 px-4 text-lg font-bold text-blue-600 rounded transition duration-300"
              : "block py-2 px-4 text-lg font-medium hover:bg-gray-100 hover:text-blue-600 rounded transition duration-300"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block py-2 px-4 text-lg font-bold text-blue-600 rounded transition duration-300"
              : "block py-2 px-4 text-lg font-medium hover:bg-gray-100 hover:text-blue-600 rounded transition duration-300"
          }
        >
          Contact
        </NavLink>
      </div>
      
    </nav>
    <ScrollToTop/>
    </>
  );
};

export default Navbar;
