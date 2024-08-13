import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img1 from "../assets/11-min.jpg"
import img from "../assets/24.jpg"

const PersonalSupport = () => {
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
Personal Support Service
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
We provides personal support tailored assistance to individuals who require help with daily activities due to age, illness, or disability. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        This support can include meal preparation, medication management, personal hygiene, and mobility assistance, provided either at home or in care facilities. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        The goal is to enhance the quality of life for individuals by maintaining their independence, dignity, and comfort. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">Personal support workers play a critical role in healthcare by providing compassionate care that respects the personal preferences and needs of each individual. 
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

export default PersonalSupport