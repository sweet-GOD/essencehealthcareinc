import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import 'animate.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="text-gray-900 bg-cover rounded-t-3xl mt-20   md:pt-0 ">

      <div
        className={`fixed bottom-4 right-2 backdrop-blur-md shadow py-3 px-6 rounded-3xl transition-opacity duration-300 ease-in-out z-30 ${isVisible ? 'opacity-100 animate__animated animate__bounce animate__infinite animate__slower' : 'opacity-0'
          }`}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      >
        <a href="https://wa.me/2348141946580" target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 text-green-600 text-md'>
          <FaWhatsapp size={26} /> Chat with me
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start bg-gray-0 p-8 border-t lg:pb-20 pt-10 lg:px-20 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Essence Healthcare Inc</h1>
          <nav className=" flex flex-col gap-2">
            <p
              className=" "
            >
              <span className="font-semibold">DUNS:</span> 13-112-2989
            </p>
            <p
              className=" "
            >
              <span className="font-semibold">CAGE CODE:</span> 9XKW4
            </p>

            <div className="flex gap-4 mt-4">
              <FaFacebook size={24} />
              <FaXTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
            </div>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/about"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/vision"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Vision Statement
            </Link>
            <Link
              to="/mission"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Mission Statement
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/residential"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Residential
            </Link>
            <Link
              to="/daily-respite"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Daily Respite
            </Link>
            <Link
              to="/personal-support"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Personal Support
            </Link>
            <Link
              to="/community-development"

              className=" hover:text-hoverColor duration-300 hover:scale-100 transition-all cursor-pointer"
            >
              Community Development
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/#" className="hover:text-hoverColor duration-300 hover:scale-100 transition-all" >
              7031 Mt Holly Way, Elkridge, MD 21075
              United States
            </Link>
            <a href="mailto:info@essencehealthcareinc.com" className="hover:text-hoverColor duration-300 hover:scale-100 transition-all" >
              info@essencehealthcareinc.com
            </a>
            <a href="tel:+12408016139" className="hover:text-hoverColor duration-300 hover:scale-100 transition-all" >
              +1 240-801-6139
            </a>
          </nav>
        </div>
      </div>
      <div className="bg-gray-100 text-sm">
        <p className="md:text-center p-6">
          Copyright © {new Date().getFullYear()} - <span className="  font-medium">Essence Healthcare Incorporation,</span> All right reserved || website developed by
          <span className="  font-medium"> Pace Technologies LLC.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
