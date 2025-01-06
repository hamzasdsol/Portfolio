import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getActive = (path) => {
    return location.pathname === path ? "text-[#00ff99] underline decoration-2" : "";
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }
  };
  return (
    <nav className="bg-transparent text-white mt-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-8  lg:px-40 p-4">
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          Hamza<span className="text-[#00ff99]">.</span>
        </span>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden z-50"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
  className={`fixed top-0 right-0 h-full w-56 bg-gray-900 md:bg-transparent
              transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
              transition-transform duration-300 ease-in-out z-40 
              md:static md:translate-x-0 md:flex md:w-auto`}
  id="navbar-default"
>


          <ul className="font-medium flex flex-col p-4 mt-20 md:space-y-0 md:mt-0 md:flex-row md:space-x-8 md:border-0 ">
            <li>
              <Link
                to="/"
                className={`block  py-2 px-1 ${getActive("/")}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={`block  py-2 px-1 ${getActive("/resume")}`}
                onClick={toggleMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-1 ${getActive("/contact")}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-[#00ff99] hover:bg-[#00e187]     text-black rounded-3xl ">
                <Link
                  to="/hire"
                  className={`block py-2 px-3  ${getActive("/hire")}`}
                  onClick={toggleMenu}
                >
                  Hire me
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
