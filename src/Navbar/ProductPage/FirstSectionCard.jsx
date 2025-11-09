import React from "react";

export default function FirstSectionCard({ cardData }) {
  return (
    <article className="px-5 lg:px-0 overflow-hidden">
      {/* Image */}
      <div className="w-full overflow-hidden">
        <img
          src={cardData.cardImg}
          className="w-full object-cover rounded-xl lg:h-52"
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <h3 className="text-lg w-[80%] lg:w-[100%] font-semibold text-gray-700">
          {cardData.cardHead}
        </h3>

        <p className="text-gray-700 text-xs mt-2 lg:mt-4 lg:leading-relaxed">
          {cardData.cardPara}
        </p>

        {/* Two additional paragraphs (or more) */}
        <div className="mt-2 flex flex-col gap-1 lg:mt-4 lg:gap-2">
          <p className="text-[15px] flex gap-1">
            <span>
              <i
                className={`ri-checkbox-circle-fill text-${cardData.color}`}
              ></i>
            </span>
            {cardData.paraOne}
          </p>

          <p className="text-[15px] flex gap-1">
            <span>
              <i
                className={`ri-checkbox-circle-fill text-${cardData.color}`}
              ></i>
            </span>
            {cardData.paraTwo}
          </p>
        </div>
        {/* Link / CTA */}
        <div className="mt-2 flex items-center gap-1 lg:mt-5">
          <p
            className={`text-${cardData.color} hover:text-black/60 transform transition-all duration-300 inline-block text-xs cursor-pointer font-semibold`}
          >
            {cardData.link}
          </p>
          <span
            className={`text-xs font-semibold hover:text-black/60 transform transition-all duration-300 text-${cardData.color}`}
          >
            <i className="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
    </article>
  );
}

/* Example usage:

import HeroCard from './HeroCard';

const data = {
  img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80',
  title: 'Designmodo Hosting',
  lead: 'Powerful, simple hosting for static sites. Deploy in seconds and scale automatically.',
  paragraphs: [
    'Optimised for performance and security.',
    'Includes free SSL, CDN, and easy rollback.',
  ],
  linkText: 'Get started',
  linkHref: '/signup',
};

<HeroCard {...data} />

*/
