import React from "react";

const FirstSection = () => {
  const cardData = [
    {
      cardImg: "/WebdesignImages/cardOne.jpg",
      cardHeadLine: "WEBSITE DESIGN",
      cardName: "GERT SVAIKO",
      cardPara:
        "Font Psychology: Here's Everything You Need To Know About Fonts",
    },
    {
      cardImg: "/WebdesignImages/cardTwo.jpg",
      cardHeadLine: "WEBSITE DESIGN",
      cardName: "ANDRIAN VALEANU AND NATALY BIRCH",
      cardPara: "Top Web Design Trends For 2025",
    },
    {
      cardImg: "/WebdesignImages/cardThree.jpg",
      cardHeadLine: "WEBSITE DESIGN",
      cardName: "ANDRIAN VALEANU",
      cardPara: "Responsive Web Design: 50 Examples and Best Practices",
    },
    {
      cardImg: "/WebdesignImages/cardFour.jpg",
      cardHeadLine: "WEBSITE DESIGN",
      cardName: "CARRIE COUSINS",
      cardPara: "17 Tips For Designing With Type on a Photo",
    },
    {
      cardImg: "/WebdesignImages/cardFive.jpg",
      cardHeadLine: "WEBSITE DESIGN",
      cardName: "TOMAS LAURINAVICIUS",
      cardPara: "How To Create a Web Design Style Guide",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-8 lg:px-16">
      <h1 className="font-semibold text-xl lg:text-2xl">
        Most Popular Articles
      </h1>
      <div className="w-full grid-nowrap grid gap-4 min-[430px]:grid-cols-2 lg:grid-cols-5 hover:cursor-pointer mt-7">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="
              group bg-white relative shadow-lg rounded-lg overflow-hidden 
              transform transition-all duration-300 hover:-translate-y-1 
            "
          >
            <div className="relative w-full rounded-t-lg overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500"
                src={data.cardImg}
                alt={data.cardName}
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="absolute top-3 left-3 bg-black/20 group-hover:bg-red-500 transition-all duration-300 flex rounded-lg">
                <span className="text-[13px] font-semibold text-white px-2 tracking-wide">
                  {data.cardHeadLine}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h1 className="text-[12px] sm:text-[13px] font-semibold text-gray-400">
                {data.cardName}
              </h1>
              <p className="mt-1 sm:text-[15px] md:text-[15px] text-[13px] group-hover:text-blue-500 transition-all duration-300 font-medium">
                {data.cardPara}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
