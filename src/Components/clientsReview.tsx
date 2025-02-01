import { useState } from "react";

import { clientsNames, OchiCards } from "../Data/featured";



const ClientsReview = () => {
  const [openAccordion, setOpenAccordion] = useState<null | number>(0);

  return (
    <div className="w-full font-['Neue_Montreal'] bg-zinc-100 pb-8">
      <div className="px-6 border-b-[1.3px] border-zinc-500 pb-10 mb-4">
        <h1 className="text-[7vw] md:text-[4.5vw]  ">Client's reviews</h1>
      </div>

      {/* Client Name, Pic And Review */}

      {clientsNames.map((client, index) => (
        <div
          key={index}
          className={`border-b-[1.3px] border-zinc-400 mb-4 ${
            clientsNames.length - 1 == index && "mb-10"
          }`}
        >
          <div className="px-6 flex items-center justify-between gap-10 mb-2 lg:mb-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-10  lg:flex-row lg:justify-between lg:gap-0">
              <h3 className="underline w-1/2 cursor-pointer'">
                {client.designation}
              </h3>
              {openAccordion === index && <h3 className="w-1/2">Services: </h3>}
            </div>
            <div className="w-1/2 flex lg:items-center justify-end  lg:justify-between">
              <h3 className="hidden lg:block">{client.name}</h3>
              <button
                onClick={() => {
                  setOpenAccordion(openAccordion === index ? null : index);
                }}
                className={`${
                  openAccordion === index && "text-zinc-400 no-underline"
                } underline`}
              >
                READ
              </button>
            </div>
          </div>

          {/* Client Image  accordion*/}

          {openAccordion === index && (
            <div
              className="lg:w-3/5  flex flex-col  lg:flex-row lg:mx-auto  p-2 gap-10 lg:py-10 mb-2 duration-[2s] ease-in-out px-6
            "
            >
              <div className="sm:w-1/2 flex flex-wrap  lg:flex-col items-start justify-start gap-2">
                {client.services.map((ele, index) => (
                  <button
                    key={index}
                    className="border-[1.5px] border-black hover:bg-black
                    hover:text-white rounded-full px-6 py-2 text-sm"
                  >
                    {ele}
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 ">
                <h3 className="lg:hidden">{client.name}</h3>

                <img
                  src={`${client.imgSrc}`}
                  alt={`${client.name}`}
                  className="w-24 h-24 rounded-lg "
                />
                <p className="text-zinc-800 ">{client.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="w-full my-20">
        <div className="w-full  grid lg:grid-cols-3 gap-4 px-8">
          {OchiCards.map((ele, index) => (
            <div
              className={`w-full ${
                index == 0 ? "w-1/2" : ""
              } md:h-[62vh] bg-blue-300 rounded-xl overflow-hidden`}
            >
              <img src={`${ele}`} alt="ochi-image" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
