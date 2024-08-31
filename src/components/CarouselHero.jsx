import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import one from "../assets/21.jpg";
import four from "../assets/23.jpg";
import two from "../assets/25.jpg";
import three from "../assets/24.jpg";
import five from "../assets/22.jpg";
import { HeroSlider } from "./HeroSlider";


const CarouselHero = () => {
    const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
    const imgs = [
      { url: four, text: "WELCOME TO ESSENCE HEALTHCARE INC — YOUR Partner IN CARE AND WELL BEING", sub: "At Essence Healthcare, we believe in more than just care; we believe in creating lasting connections, nurturing independence, and fostering a community where every individual thrives. Join us on a journey to a healthier, happier you.", link: "/personal-support" },
      { url: two, text: "Rejuvenate with Our Flexible and Supportive Daily Respite Care", sub:"Our Daily Respite Care services offer a refreshing break for caregivers and engaging activities for patients. With personalized care and a focus on social interaction and mental stimulation, we help enhance well-being and provide peace of mind during your time off.", link: "/daily-respite" },
      { url: one, text: "Find Comfort and Care in Our Supportive Residential Community", sub: "Our Residential Care facilities offer a warm and supportive environment where residents receive individualized care and attention. Enjoy peace of mind with 24-hour supervision, medical monitoring, and a variety of social and therapeutic activities designed to enhance quality of life.", link: "/residential" },
      { url: three, text: "Compassionate Personal Support Tailored to Your Daily Needs", sub:"We provide tailored assistance to help individuals with daily activities, from meal preparation to personal hygiene. Our goal is to enhance comfort, independence, and dignity, ensuring each person receives respectful and compassionate care.", link: "/personal-support" },
      { url: five, text: "Empowering Communities with Collaborative Health Initiatives", sub:"Our Community Development Services focus on promoting health and well-being through education, increased access to care, and collaborative initiatives. We work with local organizations to create resilient communities that support healthier lifestyles and environments.", link: "/community-development" },

    ];

    return (
        <div ref={ref} className="relative  overflow-hidden">
            <HeroSlider slides={imgs} />
            
        </div>
    );
};

export default CarouselHero;


