import { motion } from "framer-motion";

import ochiCard from "../assets/ochi-card.png";

const Landing = () => {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-.3"
      className="w-full h-screen md:h-[70vh] lg:h-screen  mb-10 flex flex-col justify-between "
    >
      <div className="textstructure px-6 mt-24 md:mt-30 lg:mt-36">
        {["We create", "eye-opening", "presentations"].map((item, index) => (
          <div
            className={`w-fit flex items-center gap-4 ${
              index === 1 && "gap-0"
            }`}
          >
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                className="w-full  mr-[1vh] relative top-1  rounded-lg overflow-hidden"
              >
                <img
                  src={ochiCard}
                  alt="ochiCard"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
            <h1
              key={index}
              className="uppercase text-[10vw] md:text-[8vw] lg:text-[6vw]  font-bold tracking-tighter leading-none"
            >
              {item}
            </h1>
          </div>
        ))}
      </div>

      <div className=" border-t-[1px] border-zinc-500 pt-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center px-6 mt-2 font-['Neue_Montreal'] mb-10  w-2/3 sm:w-full">
          {[
            " For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className=" leading-none tracking-tight text-sm md:text-lg text-black "
            >
              {item}
            </p>
          ))}

          <button className="uppercase border-[1.2px] py-1 px-2 font-light  text-black  border-black rounded-full hover:bg-black hover:text-white text-sm ">
            Start the Projct
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
