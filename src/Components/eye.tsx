import { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // You will radians value than multiply with 180/PI
      let degree = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(degree - 180);
    });
  }, []);
  return (
    <div className="eye w-full h-[35vh]  md:h-[50vh] lg:h-screen overflow-hidden">
      <div
        // data-scroll
        // data-scroll-speed="-0.7"
        className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center '
      >
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=""
          className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-10"
        >
          <div className=" w-[24vw] sm:w-[35vw] md:w-[25vw] lg:w-[16vw] h-[24vw] sm:h-[35vw]   md:h-[25vw]  lg:h-[16vw] bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3  bg-black rounded-full text-white relative">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-xs sm:text-sm">
                Play
              </h2>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full  h-10 rotate-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6  bg-white rounded-full text-white flex justify-center items-center"></div>
              </div>
            </div>
          </div>
          <div className="w-[24vw]  sm:w-[35vw] md:w-[25vw] lg:w-[16vw] h-[24vw] sm:h-[35vw]  md:h-[25vw] lg:h-[16vw]   bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3  bg-black rounded-full text-white relative">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-xs sm:text-sm">
                Play
              </h2>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full  h-10 rotate-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6  bg-white rounded-full text-white flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
