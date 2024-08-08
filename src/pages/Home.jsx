import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero'
import About from '../components/About'
import CarouselHero from '../components/CarouselHero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Blogs from '../components/Blogs';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import ContactUs from '../components/ContactUs';
import Button from '../layouts/Button';

const Home = () => {
    const ref = useRef(null);
    
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={ref} className='m-0 p-0'>
            <CarouselHero />
            {/* <Hero /> */}
            <div className="pt-14 lg:pt-20 flex flex-col items-center lg:flex-row justify-between lg:px-32 px-5">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
          Welcome to <br />Essence Healthcare Incorporation
          </h1>
          
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Read more" link={"/about"} />
        </div>
      </div>
            <About />
            <Services />
            
            <Vision />
            <Mission />
            <ContactUs />


            {/* <Doctors /> */}
            {/* <Blogs /> */}
            
        </div>
    )
}

export default Home