import { GoDotFill } from "react-icons/go";
import ochiCouple from "../assets/ochiCouple.jpg";

const About = () => {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-.3"
      className="w-full bg-[#CDEA68] pt-14 sm:pt-20 pb-5    font-['Neue_Montreal']"
    >
      <div className="px-6">
        <h1 className=" text-[8vw] sm:text-[4.5vw] leading-[9vw] sm:leading-[4.5vw]  text-[#212121] tracking-wide">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="underline"> raise funds</span>,
          <span className="underline"> sell products</span>,{" "}
          <span className="underline">explain complex ideas</span>, and
          <span className="underline"> hire great people</span>.
        </h1>
      </div>

      <div className=" mt-16  px-6 py-4 pb-20 border-t-[1.3px] border-b-[1.3px]  border-zinc-500">
        <div className=" flex flex-col gap-4 sm:flex-row sm:justify-between text-[4.5vw] md:text-[2.5vw] lg:text-[1.3vw]">
          <div className="w-1/2">
            <p>What you can expect:</p>
          </div>

          <div className="md:w-1/2 flex flex-col gap-10 pr-14 sm:pr-20 lg:pr-32">
            <p className="lg:pr-16">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="lg:pr-16">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex items-center ">
            <div>
              <h2 className="mb-2">S:</h2>
              <div>
                {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                  (item, index) => (
                    <p key={index} className="underline">
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}

      <div className="px-6 pt-4 pb-10  lg:pb-28 flex flex-col gap-8 sm:flex-row sm:justify-between">
        <div className="">
          <h1 className="text-[8vw]  sm:text-5xl tex-[#212121]">
            Our approach:
          </h1>
          <button className="text-white bg-black px-6 py-3 rounded-full flex justify-between items-center text-[4vw] md:text-[2vw] lg:text-[1.5vw] gap-8 mt-4">
            Read More <GoDotFill />
          </button>
        </div>
        <div className="sm:w-1/2 h-[30vh] lg:h-[70vh]">
          <img src={ochiCouple} alt="OchiCouple" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
