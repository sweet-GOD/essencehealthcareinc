import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img from "../assets/img/doc6.jpg";

const ContactUs = () => {
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
        <div ref={ref} className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-14 lg:py-40 gap-8">
            <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.4 }} className="h-[400px] overflow-hidden w-full lg:w-2/4">
                <img className="rounded-lg object-cover h-full w-full" src={img} alt="Contact Us" />
            </motion.div>

            <div className="w-full lg:w-2/4 space-y-8">
                <h1 className="text-4xl font-semibold text-center lg:text-start">Contact Us</h1>
                <motion.form ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.4, delay: 0.6 }} 
                    className="space-y-4 "
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-hoverColor focus:ring-hoverColor" placeholder="Your Name" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-hoverColor focus:ring-hoverColor" placeholder="Your Email" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-hoverColor focus:ring-hoverColor" rows="4" placeholder="Your Message"></textarea>
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
