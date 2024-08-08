import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {Link} from "react-router-dom"

const ServicesCard = ({ icon, title, sub, link, time }) => {
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
    <motion.div variants={{
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.4, delay: 0.4 }} ref={ref} className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-lg border lg:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer  transition duration-300 ease-in-out">
      <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg">{title}</h1>
      <p>{sub}
      </p>

      <Link to={link} className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </Link>
    </motion.div>
  );
};

export default ServicesCard;
