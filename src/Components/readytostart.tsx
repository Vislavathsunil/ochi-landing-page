import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";

type Props = {};

const Readytostart = (props: Props) => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let widthX = e.clientX;
      let heightY = e.clientY;

      let deltaX = widthX - window.innerWidth / 2;
      let deltaY = heightY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <div
      // data-scroll
      // data-scroll-speed="0.1"
      className="w-full  bg-[#CDEA68] rounded-xl font-['Neue_Montreal'] "
    >
      <div className="w-full h-[42vh]  lg:h-[100vh]  flex justify-center items-center -mt-10 -mb-20 lg:-mb-0">
        <div className="">
          {["Ready", "To Start", "The Project?"].map((ele, index) => (
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: index * 0.5 }}
              viewport={{once:true}}
              className="uppercase text-[12.5vw] sm:text-[10vw] flex justify-center font-extrabold leading-none"
            >
              {ele}
            </motion.h1>
          ))}
        </div>
      </div>

      {/* eyes */}
      <div
        scroll-data
        scroll-data-section
        scroll-data-speed="0.2"
        className="flex justify-center gap-8 sm:pb-10"
      >
        <div className="w-[22vw] lg:w-[15vw] h-[22vw] lg:h-[15vw]  bg-white  rounded-full relative">
          <div className="w-2/3 h-2/3 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-white">
              Play
            </h2>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
              }}
              className="line w-full h-10 rotate-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className=" w-3 md:w-5 md:h-5 h-3  bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[22vw] lg:w-[15vw] h-[22vw] lg:h-[15vw]  bg-white  rounded-full relative">
          <div className="w-2/3 h-2/3 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-white">
              Play
            </h2>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
              }}
              className="line w-full h-10 rotate-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="w-3 md:w-5 md:h-5 h-3   bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Start the project or Hello@OCHI.DESIGN */}
      <div className="w-full flex flex-col items-center gap-4 mt-6 pb-10 ">
        <button className="uppercase   text-white bg-zinc-700 hover:bg-black py-3 px-4 flex justify-center items-center gap-4 rounded-full">
          {" "}
          <span>Start The Project</span> <GoDotFill />
        </button>
        <h3>OR</h3>
        <button className="uppercase   py-3 px-4 border-[1.5px] border-zinc-800 hover:text-white hover:bg-black rounded-full flex justify-center items-center gap-4">
          {" "}
          <span>Hello@Ochin.Desing</span>
          <GoDotFill className="text-black" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Readytostart;
