import { OchiCards } from "../Data/featured";

const OchiCard = () => {
  return (
    <div className="w-full my-20">
      <div className="w-full  sm:grid sm:grid-cols-3 gap-4 px-8">
        {OchiCards.map((ele, index) => (
          <div
            key={index}
            className="w-full h-[62vh] bg-blue-300 rounded-xl overflow-hidden "
          >
            <img src={`${ele}`} alt="ochi-image" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OchiCard;
