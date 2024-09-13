import React, { useEffect, useRef } from "react";
import {  useLocation } from 'react-router-dom';
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/25.jpg";

const Mission = () => {
    const ref = useRef(null);
    const location = useLocation();
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    const getLinkStyle = (path) => {
        return location.pathname === path ? 'bg-gradient-to-br from-green-500 to-green-700 text-white py-20' : 'pt-14 lg:pt-40 ';
      };

    return (
        <div ref={ref} className={`flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5  gap-8 ${getLinkStyle("/")}`}>
            <div className=" w-full lg:w-3/4 space-y-8">
                <h1 className=" text-4xl font-semibold text-center lg:text-start ">Mission Statement</h1>

                <motion.p ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 0.4 }} className=" text-justify lg:text-start">
                    Essence Healthcare, Inc's mission is to provide compassionate, comprehensive healthcare services to individuals with disabilities, focusing on accessibility, equality, and support. <br /> <br />
                    We are committed to innovating solutions that enhance the health and wellbeing of our clients, advocating for their rights, and ensuring they receive the care they need to lead fulfilling lives.

                </motion.p>

            </div>
            <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.6 }} className="h-[300px] overflow-hidden w-full lg:w-3/4">
                <img className=" rounded-tl-[50px] rounded-br-[50px] object-cover h-full w-full" src={img} alt="img" />
            </motion.div>
        </div>
    );
};

export default Mission;
