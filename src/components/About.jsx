import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/22.jpg";
import {Link} from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../layouts/Button";

const About = () => {
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

  return (
    <div ref={ref} className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-14 lg:pt-16 gap-8">
      <div className=" w-full lg:w-3/4 space-y-4">

      

        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }} className=" text-justify lg:text-start">
        At Essence Healthcare Inc, we specialize in providing high-quality care for individuals with disabilities. Our approach is simple: we offer personalized, compassionate support to meet the unique needs of each person we serve. Our services are designed to be both accessible and effective, ensuring that everyone receives the care they deserve.
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        Our team is dedicated to creating an environment where every individual feels valued and supported. We focus on enhancing well-being through tailored care plans and professional service. We work closely with our clients to ensure that their needs are met with respect and attention.
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.8 }} className="text-justify  lg:text-start">
        Essence Healthcare Inc is committed to making a positive difference in the lives of our clients. We strive to be a trusted partner in healthcare, providing solutions that improve quality of life and promote independence. Your health and happiness are our top priorities, and we are here to support you every step of the way.
        </motion.p>
      </div>
      <motion.div ref={ref}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="h-[430px] overflow-hidden w-full lg:w-3/4">
        <img className=" rounded-lg object-cover h-full w-full" src={img} alt="img" />
      </motion.div>
    </div>
  );
};

export default About;
