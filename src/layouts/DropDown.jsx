import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"

const DropDown = () => {
  return (
    <div className="flex justify-center  px-3 py-12">
      <FlyoutLink  FlyoutContent={PricingContent}>
        Services
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <p  className="relative ">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#3ba934] transition-transform duration-300 ease-out"
        />
      </p>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-80 bg-white p-6 z-50 shadow-xl">
      <div className="mb-3 space-y-3">
        {/* <h3 className="font-semibold">For Individuals</h3> */}
        <Link to={"/residential"} className="block text-sm hover:text-[#3ba934]">
          Residential
        </Link>
        <Link to={"/daily-respite"} className="block text-sm hover:text-[#3ba934]">
          Daily Respite
        </Link>
        <Link to={"/personal-support"} className="block text-sm hover:text-[#3ba934]">
          Personal Support
        </Link>
        <Link to={"/community-development"} className="block text-sm hover:text-[#3ba934]">
          Community Development
        </Link>
        
      </div>

      {/* <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button> */}
    </div>
  );
};

export default DropDown;