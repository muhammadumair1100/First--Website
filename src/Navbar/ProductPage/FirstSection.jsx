import React from "react";
import FirstSectionCard from "./FirstSectionCard";

const FirstSection = () => {
  const card = [
    {
      cardImg:
        "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/static-color-bg.svg",
      cardHead: (
        <>
          Simple <span className="text-[#27ae60]">Hosting</span> for Static
          Websites
        </>
      ),
      color: "[#27ae60]",
      cardPara:
        "Drag-n-drop solution for your static website to quickly host your static website.",
      paraOne: "Unlimited Traffic",
      paraTwo: "Free SSL Certificate",
      link: "Visit static.app",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/siterio-color-bg.svg",
      cardHead: (
        <>
          Intuitive <span className="text-[#267bf0]">Site Builder</span> for
          Designers
        </>
      ),
      color: "[#267bf0]",
      cardPara:
        "Design in the cloud and create new websites seamlessly, without any coding skills.",
      paraOne: (
        <>
          <span className="underline cursor-pointer">Free Figma Plugin</span>
          <i className="ri-arrow-right-up-line"></i>
        </>
      ),
      paraTwo: "Free SSL Certificate",
      link: "Visit siter.io",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/pulsetic-color-bg.svg",
      cardHead: (
        <>
          <span className="text-[#6451e0]">Website Monitoring</span> with Status
          Pages
        </>
      ),
      color: "[#6451e0]",
      cardPara:
        "Get website downtime alerts by phone call, SMS, email, Slack, etc when your website went down.",
      paraOne: "Customize Status Pages",
      paraTwo: "Embedable Badges",
      link: "Visit pulsetic.com",
    },
  ];

  return (
    <div className="mt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700 sm:text-3xl lg:text-4xl mb-12">
        Our Services
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:px-12 lg:gap-5">
        {card.map((card, i) => (
          <FirstSectionCard key={i} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
