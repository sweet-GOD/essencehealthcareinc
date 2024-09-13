import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/26.jpg";
import { Link, useLocation } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";

const Vision = () => {
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
        return location.pathname === path ? ' py-20' : 'pt-14 lg:pt-40 ';
      };

    return (
        <div ref={ref} className={`flex flex-col lg:flex-row-reverse justify-between items-center lg:px-32 px-5  gap-8 ${getLinkStyle("/")}`}>
            <div className=" w-full lg:w-3/4 space-y-8">
                <h1 className=" text-4xl font-semibold text-center lg:text-start ">Vision Statement</h1>

                <motion.p ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 0.4 }} className=" text-justify lg:text-start">
                    At Essence Healthcare, we strive to create a world where healthcare transcends boundaries, ensuring individuals with disabilities receive the highest quality of care and support. <br /><br />
                    Also, to be at the forefront of inclusive healthcare, where every person, regardless of disability, can achieve optimal health and wellness.

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
                <img className=" rounded-tl-[50px] rounded-br-[50px]  object-cover h-full w-full" src={img} alt="img" />
            </motion.div>
        </div>
    );
};

export default Vision;
