import React from "react";
import { cards } from "./cards";
import HeroCards from "./HeroCards";

const HeroSection = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700 sm:text-3xl lg:text-4xl mb-16">
        Our Products
      </h1>

      <div className="w-full px-8 lg:px-12 mb-8">
        {cards
          .filter((_, i) => i === 0)
          .map((card, i) => (
            <div
              key={i}
              className={`${card.cardBG} rounded-3  p-4 md:p-8 rounded-3xl flex lg:flex-row flex-col overflow-hidden `}
            >
              <HeroCards key={i} cardData={card} />
            </div>
          ))}
      </div>

      <div className="w-full grid gap-5 md:grid-cols-2 lg:px-12 px-6">
        {cards
          .filter((_, i) => i > 0)
          .map((card, i) => (
            <div
              key={i}
              className={`${card.cardBG} rounded-xl x p-4 md:p-8 flex flex-col overflow-hidden `}
            >
              <HeroCards key={i} cardData={card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroSection;
