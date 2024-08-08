import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from "../layouts/Button";
import { AiOutlineArrowDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../modals/Contact";
import icon1 from "../assets/clock.png"
import icon2 from "../assets/mailing.png"
import icon3 from "../assets/location.png"
import logo from "../assets/logo.png"
import DropDown from '../layouts/DropDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const getLinkStyle = (path) => {
    return location.pathname === path ? 'text-[#3ba934] ' : 'hover:text-hoverColor transition-all text-gray-500 cursor-pointer ';
  };

  return (
    <div className='border-b shadow-lg top-0 left-0 z-50 w-full bg-[#fff]'>
      <div className='w-full hidden lg:flex flex-col md:flex-row md:justify-center md:items-center text-xs text-justify border-b-2 border-gray-100 bg-[#3ca9340a]'>
        {/* text-[#50d5a0] */}
        <div className='flex items-center justify-center gap-6 border-x-2 border-gray-100 py-5 px-8'>
          <img src={icon1} className='w-10' alt="" />
          <div>
            <h1 className='font-semibold mb-1'>Monday - Friday 8:00 - 6:30</h1>
            <h1 className='font-semibold  text-gray-500 '>Saturday and Sunday - CLOSED</h1>
          </div>
        </div>

        <div className='flex items-center justify-center gap-6  border-gray-100 py-5 px-8'>
          <img src={icon2} className='w-12' alt="" />
          <div>
            <h1 className='font-semibold mb-1'><a href="tel:+1(240)801-6139">+1(240)801-6139</a></h1>
            <h1 className='font-semibold  text-gray-500 '><a href="mailto:info@essencehealthcareinc.com">info@essencehealthcareinc.com</a></h1>
          </div>
        </div>

        <div className='flex items-center justify-center gap-6 border-x-2 border-gray-100 py-5 px-8'>
          <img src={icon3} className='w-10' alt="" />
          <div>
            <h1 className='font-semibold mb-1'>7031 Mt Holly Way, Elkridge, MD 21075</h1>
            <h1 className='font-semibold  text-gray-500 '>Essence Healthcare Inc</h1>
          </div>
        </div>


      </div>

      <div className=" w-full z-50 ">
        <div>
          <div className={`${isScrolled ? 'fixed top-0 left-0  w-full bg-[#ffffffa4] backdrop-blur shadow-lg transition-all duration-300 ' : 'relative bg-transparent '} flex flex-row justify-between z-50  md:px-32 px-4 bg-white text-base `} >
            <div className=" flex flex-row items-center cursor-pointer">
              <Link to="/" >
                <img src={logo} className='md:h-24 h-20' alt="spectrite-logo" />
              </Link>
            </div>

            <div className="flex justify-end items-center gap-10 h-24">
              <nav className=" hidden lg:flex flex-row items-center text-base font-medium gap-20">
                <Link
                  to="/"
                  className={getLinkStyle("/")}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={getLinkStyle("/about")}
                >
                  About Us
                </Link>
                <p
                  className="hover:text-hoverColor transition-all text-gray-500 cursor-pointer"
                >
                  <DropDown />
                </p>

              </nav>

              <div className=" hidden lg:flex">
                <button
                  className="bg-brightColor text-white px-6 py-2 rounded-md hover:bg-hoverColor transition duration-300 text-xs ease-in-out h-16 font-semibold"
                  onClick={openForm}
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {showForm && <Contact closeForm={closeForm} />}

            <div className=" lg:hidden flex items-center z-50">
              {menu ? (
                <AiOutlineClose size={28} onClick={handleChange} />
              ) : (
                <AiOutlineMenu size={28} onClick={handleChange} />
              )}
            </div>
          </div>
          <div
            className={`${menu ? "translate-x-0" : "-translate-x-full"
              } lg:hidden flex flex-col fixed bg-[#ffffffa4] backdrop-blur  left-0 top-24 font-semibold  text-center pt-8 pb-8 shadow-lg gap-8 w-full h-full transition-transform duration-300 text-xl z-50`}
          >
            <Link
              to="/"
              className={getLinkStyle("/")}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={getLinkStyle("/about")}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <p
              className="text-gray-400 my-6"
            >
              Services 
            </p>
            <Link
              to="/residential"
              className={getLinkStyle("/residential")}
              onClick={closeMenu}
            >
              Residential
            </Link>
            <Link
              to="/daily-respite"
              className={getLinkStyle("/daily-respite")}
              onClick={closeMenu}
            >
              Daily Respite
            </Link>
            <Link
              to="/personal-support"
              className={getLinkStyle("/personal-support")}
              onClick={closeMenu}
            >
              Personal Support
            </Link>
            <Link
              to="/community-development"
              className={getLinkStyle("/community-development")}
              onClick={closeMenu}
            >
              Community Development
            </Link>

            <div className=" lg:hidden">
              <button
                className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
                onClick={openForm}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
