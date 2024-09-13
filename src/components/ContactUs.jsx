import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/img/doc6.jpg";

const ContactUs = () => {
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
        <div ref={ref} className={`flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 gap-20 ${getLinkStyle("/")} `}>
            <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.4 }} className="h-[420px] overflow-hidden w-full lg:w-2/4">
                <img className="rounded-tr-[50px] rounded-bl-[50px] object-cover h-full w-full" src={img} alt="Contact Us" />
            </motion.div>

            <div className="w-full lg:w-2/4 space-y-8">
                <h1 className="text-4xl font-semibold text-center lg:text-start">Contact Us</h1>
                <motion.form ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 0.6 }} 
                    className="space-y-4 "
                >
                    <div>
                        <label className="block text font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-4 p-2 block w-full rounded-md border border-gray-400 shadow focus:border-hoverColor focus:ring-hoverColor" placeholder="Your Name" />
                    </div>

                    <div>
                        <label className="block text font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-4 block p-2 w-full rounded-md border border-gray-400 shadow focus:border-hoverColor focus:ring-hoverColor" placeholder="Your Email" />
                    </div>

                    <div>
                        <label className="block text font-medium text-gray-700">Message</label>
                        <textarea className="mt-4 block w-full rounded-md p-2 border border-gray-400 shadow focus:border-hoverColor focus:ring-hoverColor" rows="4" placeholder="Your Message"></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="bg-hoverColor text-white py-2 px-4 rounded-md hover:bg-hoverColor/90"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default ContactUs;
