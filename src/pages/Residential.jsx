import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/25.jpg"
import img1 from "../assets/8-min.jpg"

const Residential = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
       <div>
        <div className="relative overflow-hidden bg-blue-950 lg:h-[50vh] h-[60vh] ">
      <div className="w-full h-full absolute top-0 left-0 bg-[#33333367] "></div>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute text-5xl head text-white font-bold transform -translate-y-1/2 top-1/2 lg:left-40 left-12   uppercase"
        >
Residential Service
</motion.h1>
        <img
          className="w-full h-full "
          src={img1}
          alt=""
        />
      </div>
    </div>
    

    <div ref={ref} className="flex flex-col lg:flex-row justify-between items-start lg:px-32 px-5 pt-14 lg:pt-16 gap-8">
      <div className=" w-full lg:w-3/4 space-y-4">

      

        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }} className=" text-justify lg:text-start">
        Essence Healthcare facilities offer a structured environment where residents receive personalized care plans designed to their specific medical and personal needs.
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        Services often include 24-hour supervision, medical monitoring, assistance with daily activities, therapeutic programs, and social activities designed to promote engagement and well-being.
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        Our Residential care  refers to long-term or short-term accommodation and care for individuals who need continuous support due to age, disability, or chronic health conditions.
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
    </div>
  )
}

export default Residential