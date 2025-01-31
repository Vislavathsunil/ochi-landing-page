import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Marquee = (props: Props) => {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="0.1"
      className="w-full  bg-[#004D43] py-14 sm:py-20 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text flex  whitespace-nowrap border-t-2 border-b-2 border-zinc-500  text-white overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[20vw] font-semibold font-["Neue_Montreal"] uppercase leading-none -mb-[1vw] -mt-[1.5vw] pr-8'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[20vw] font-semibold font-["Neue_Montreal"] uppercase leading-none -mb-[1vw] -mt-[1.5vw] '
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
