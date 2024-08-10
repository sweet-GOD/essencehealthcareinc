import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img1 from "../assets/23.jpg"
import img from "../assets/16.png"


const DailyRespite = () => {
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
Daily Respite Service
</motion.h1>
        <img
          className="w-full h-full object-bottom"
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
        Essence daily respite services offer more than just a change of scenery. We provide an opportunity to engage with different caregivers and participate in diverse activities that can enrich our caregiver and patients daily experience. 
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        These interactions can help maintain their social skills, stimulate mental activity, and promote emotional health. The Comprehensive Support from Our Professional Caregivers During your time off are as follows:
        </motion.p>
        <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className="text-justify lg:text-start">
        Our dedicated caregivers will: <br /><br />
        <ul className="">
            <li>• Provide flexible respite home care services</li>
            <li>• Perform duties according to the established plan of care</li>
            <li>• Learn and follow the caregiving routine</li>
            <li>• Understand the patient’s condition</li>
            <li>• Provide activities of daily living (Ask pepper on this)</li>
        </ul>
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

export default DailyRespite