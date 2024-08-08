import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHandsHelping, FaHeartbeat } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { FaHouseChimneyMedical } from "react-icons/fa6";



const Services = () => {
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

  const icon1 = (
    <FaBedPulse size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <FaHouseChimneyMedical size={35} className=" text-backgroundColor" />
  );
  const icon4 = <FaHandsHelping size={35} className=" text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div ref={ref} className="bg-[url('assets/pattern-31.png')]  bg-cover  min-h-screen flex flex-col justify-center lg:px-32 px-5 mt-24 lg:mt-16 p-6">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <motion.h1 ref={ref}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }} className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </motion.h1>
          <motion.p ref={ref}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.6 }} className=" mt-2 text-center lg:text-start">
            We deliver quality care
            giving services at Essence Healthcare Inc.
          </motion.p>
        </div>
        <motion.div ref={ref}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }} className=" mt-4 lg:mt-0">
          <Button title="See Services" link={"/services"} />
        </motion.div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        
        <ServicesCard timee={0.4} link={"/daily-respite"} icon={icon1} title="Daily Respite" sub="Essence daily respite services offer more than just a change of scenery. We provide an opportunity to engage with different..." />
        <ServicesCard timee={0.6} link={"/residential"} icon={icon2} title="Residential" sub="Essence Healthcare facilities offer a structured environment where residents receive personalized care plans designed to..." />
        <ServicesCard timee={0.8} link={"/personal-support"} icon={icon4} title="Personal Support" sub="We provides personal support tailored assistance to individuals who require help with daily activities..." />
        <ServicesCard timee={1} link={"/community-development"} icon={icon3} title="Community Development" sub="At Essence, Our Community development services focus on improving health..." />
      </div>
    </div>
  );
};

export default Services;
