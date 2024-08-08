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
    <div className=" bg-[url('assets/footerBg.png')] text-gray-900 bg-cover rounded-t-3xl mt-10  md:pt-20 ">

<div
      className={`fixed bottom-4 right-2 bg-hoverColor shadow py-3 px-6 rounded-3xl transition-opacity duration-300 ease-in-out z-30 ${
        isVisible ? 'opacity-100 animate__animated animate__bounce animate__infinite animate__slower' : 'opacity-0'
      }`}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <a href="https://wa.me/2348141946580"  target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 text-white text-lg'>
        <FaWhatsapp size={26} /> Chat with me
      </a>
    </div>

      <div className="flex flex-col md:flex-row justify-between items-start p-8 lg:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-2">
          <Link to="/" >
                <img src={logo} className='md:h-40 h-24 ' alt="spectrite-logo" />
              </Link>
          </h1>
          <p className="md:hidden text-sm">
            We provide compassionate, comprehensive healthcare services to individuals with disabilities, focusing on accessibility, equality, and support.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
            Vision Statement
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
            Mission Statement
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
              Residential
            </Link>
            <Link
              to="/residential"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
              Daily Respite
            </Link>
            <Link
              to="/personal-support"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
              Personal Support
            </Link>
            <Link
              to="/community-development"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white duration-300 hover:scale-105 transition-all cursor-pointer"
            >
              Community Development
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/#" spy={true} smooth={true} duration={500}>
            7031 Mt Holly Way, Elkridge, MD 21075
            United States
            </Link>
            <a href="mailto:info@essencehealthcareinc.com" spy={true} smooth={true} duration={500}>
            info@essencehealthcareinc.com
            </a>
            <a href="tel:+12408016139" spy={true} smooth={true} duration={500}>
              +1 240-801-6139
            </a>
            <div className="flex gap-4 mt-4">
              <FaFacebook size={24} />
              <FaXTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
            </div>
          </nav>
        </div>
      </div>
      <div className="">
        <p className="md:text-center p-6">
          Copyright © {new Date().getFullYear()} - <span className="  font-medium">Essence Healthcare Incorporation,</span> All right reserved || website developed by
          <span className="  font-medium"> Onas.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
