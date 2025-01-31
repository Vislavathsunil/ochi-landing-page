import React from "react";
import { featuredData } from "../Data/featured";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="w-full pt-20 pb-10 bg-zinc-100 font-['Neue_Montreal']">
      <div className="px-6 border-b-[1.3px] border-zinc-500 pb-6 mb-14">
        <h1 className="text-[7vw] sm:text-[4.2vw] tracking-normal sm:tracking-tight ">
          Featured projects
        </h1>
      </div>

      <motion.div className=" px-6 md:grid md:grid-cols-2 gap-5 mb-10">
        {featuredData.map((ele) => (
          <div
            key={ele.id}
            className="cardContainer w-full h-[40vh]  lg:h-[75vh]  mb-40 lg:mb-32"
          >
            <h2 className="mb-4 uppercase tracking-tight flex items-center gap-2">
              <GoDotFill className="text-xl" /> {ele.title}
            </h2>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "linear", duration: 0.5 },
                }}
                src={ele.imgSrc}
                alt={`${ele.title}`}
                className="w-full h-full bg-cover rounded-xl"
              />
            </div>
            <div className="py-5 flex justify-start  flex-wrap gap-4">
              {ele.buttons.map((ele, index) => (
                <button
                  key={index}
                  className="border-[1.5px] border-black py-1 px-2 rounded-full text-sm flex items-center justify-center hover:bg-black hover:text-white"
                >
                  {ele}
                </button>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* VIEW Al I CASE STUDIES */}
      <div
        className="caseStudies w-full h-[16vh] lg:h-[30vh]  flex justify-center items-center 
        "
      >
        <button
          className="uppercase border-2 border-none rounded-full bg-zinc-800 hover:bg-black text-white text-sm
         flex items-center gap-10 p-4"
        >
          {" "}
          VIEW All CASE STUDIES{" "}
          <div className="h-3 w-3  bg-white rounded-full"></div>{" "}
        </button>
      </div>
    </div>
  );
};

export default Featured;
