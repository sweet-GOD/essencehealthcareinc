import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img1 from "../assets/21.jpg"
import img from "../assets/22.jpg"

const CommunityDevelopment = () => {
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
                        Community Development Service
                    </motion.h1>
                    <img
                        className="w-full h-full object-center"
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
            At Essence, Our Community development services focus on improving health outcomes by addressing the social determinants of health within communities.  
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
            These services include programs aimed at increasing access to healthcare, promoting health education, and reducing environmental health risks. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
            These efforts not only improve individual health but also enhance community well-being, leading to more resilient and sustainable communities. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        By collaborating with local organizations, healthcare providers can implement initiatives that support healthier lifestyles and environments. 
        </motion.p>
      </div>
      <motion.div ref={ref}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="h-[400px] overflow-hidden w-full lg:w-3/4">
        <img className=" rounded-lg object-cover h-full w-full" src={img} alt="img" />
      </motion.div>
    </div>
        </div>
    )
}

export default CommunityDevelopment