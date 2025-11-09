import React from "react";

const HeroCards = ({ cardData }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="">
          <h1 className="flex items-center gap-1 text-2xl font-semibold mb-4">
            <span className="material-symbols-outlined text-2xl text-black">
              token
            </span>
            {cardData.cardName}
          </h1>
          <h2 className="text-lg sm:text-2xl lg:text-2xl sm:w-[80%] md:w-[80%] w-[100%] font-medium text-gray-800 mb-4">
            {cardData.cardHeading}
          </h2>
        </div>
        <div>
          <p className="text-gray-600 w-[100%] sm:w-[70%] sm:text-sm text-xs mb-4">
            {cardData.cardPara}
          </p>

          <div className="lg:flex gap-4">
            <p className="flex text-xs items-center gap-2 text-gray-700">
              <i className="ri-checkbox-circle-fill "></i>
              {cardData.pOne}
            </p>
            <p className="flex text-xs items-center gap-2 text-gray-700">
              <i className={`ri-checkbox-circle-fill`}></i>
              {cardData.pTwo}
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-8 lg:pb-24 flex flex-wra gap-2 ">
          <button
            className={`${cardData.color} text-xs text-white px-2 md:px-4 lg:px-6 py-2 rounded-3xl  transition`}
          >
            Open App
          </button>
          <button
            className={`bg-white border-2 text-xs px-2 md:px-4 py-2 text-black hover:text-white rounded-3xl hover:${cardData.color}  transition`}
          >
            Learn More
          </button>
          <button
            className={` border-2 px-2 py-1 rounded-full hover:text-white hover:${cardData.color} transition`}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>

      <div className="w-full  mt-16 lg:mt-0 -mb-4 lg:-mb-16 flex justify-center items-center ">
        <img
          src={cardData.cardImg}
          alt=""
          className="rounded-lg w-full h-full -mr-16 object-cover rotate-12 -skew-x-12 w-full h-auto max-h-64 lg:max-h-80"
        />
      </div>
    </>
  );
};

export default HeroCards;
