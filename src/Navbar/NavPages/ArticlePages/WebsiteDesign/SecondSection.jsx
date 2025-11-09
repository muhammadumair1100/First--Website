import React from "react";

const SecondSection = ({ cardData }) => {
  return (
    <div className="w-full mt-12 mb-32 px-8 lg:px-16">
      <h1 className="font-semibold text-xl lg:text-2xl">Latest Articles</h1>
      <div className="w-full grid gap-5 min-[430px]:gap-y-10 md:grid-cols-3 min-[430px]:grid-cols-2  mt-5">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="
              group  relative  rounded-md overflow-hidden 
              transform transition-all duration-300 
            "
          >
            <div className="relative w-full hover:cursor-pointer aspect-video rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500"
                src={data.cardImg}
                alt={data.cardName}
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div className="mt-3">
              <h1 className="text-[13px] uppercase font-semibold text-gray-400">
                {data.cardName}
              </h1>
              <h1 className="mt-2  text-[16px] hover:cursor-pointer  hover:text-blue-500 font-medium">
                {data.cardPara}
              </h1>
              <p className="mt-2 font-normal text-gray-600 hover:text-blue-500 text-xs hover:cursor-pointer">
                {data.cardLine}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
