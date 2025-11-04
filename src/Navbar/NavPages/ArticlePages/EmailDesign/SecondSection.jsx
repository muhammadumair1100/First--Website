import React from "react";

const SecondSection = () => {
  const cardData = [
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/09/building-websites-522x292.jpg",
      cardName: "LAIBA SIDDIQUI - SEPTEMBER 23, 2025",
      cardPara: "Static vs. Dynamic Website: Which One is the Best for you?",
      cardLine:
        "As of July 2025, there are approxmately 1.2 billion websites worldwide (and this number is...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/08/light-mode-vs-dark-mode-522x292.jpg",
      cardName: "LAIBA SIDDIQUI - AUGUST 27, 2025",
      cardPara:
        "Dark mode Websites: Web Design Tips, Examples & Best Practices",
      cardLine:
        "You open your laptop at night. The screen blasts white light into your face. Your...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/07/laptop-522x292.jpg",
      cardName: "LAIBA SIDDIQUI - JULY 29, 2025",
      cardPara:
        "How to Make an Animated Websites That Stands Out: Step-by-Step Guide",
      cardLine:
        "You click on a new website. The page reloads, but nothing appears to move. No...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/04/figma-tutorials-522x292.png",
      cardName: "NATALY BIRCH AND EKTA SWARNKAR - APRIL 14, 2025",
      cardPara: "10 Best Figma Tutorials for Inspiring Designers in 2025",
      cardLine:
        "Figma hold over 30% of the market share in the design tools space and for...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/03/website-pages-522x292.png",
      cardName: "EKTA SWARNKAR AND NATALY BIRCH - MARCH 31, 2025",
      cardPara: "11 Necessary Websites Pages To Include In Your Website",
      cardLine:
        "Designing a website without a clear structure is like building a house website a floors...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2025/03/email-popups-522x292.png",
      cardName: "NATALY BIRCH AND EKTA SWARNKAR - MARCH 25, 2025",
      cardPara: "What Are Email Popups: 8 Effective Examples & Best Practices",
      cardLine:
        "Marketers have a love-and-hate relationship with email popups. They're annoying, yet highly effective at coverting....",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2024/11/web-design-trends-2025-522x292.jpg",
      cardName: "ARDIAN VALEANU AND NATALY BIRCH - NOVEMBER 25, 2024",
      cardPara: "Tob Web Design Trends for 2026",
      cardLine:
        "We are about to enter 2026. Along with taking a close look back to assess...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2024/01/invision-alternatives-522x292.png",
      cardName: "ANDRIAN VALEANU - AUGUST 06, 2024",
      cardPara: "09 Best InVision Alternatives to Switches to in 2025",
      cardLine:
        "On 4 January 2024, InVision announced that its design collaboration services are shutting down. So...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2023/11/cyber-522x292.jpg",
      cardName: "ANDRIAN VALENAU - NOVEMBER 27, 202",
      cardPara:
        "Cyber Monday 2025: Top Deals for Web Designers, Email Marketers, and Figma Designers",
      cardLine:
        "As Cyber Monday 2025 approaches, it's an exciting time for web designers, web developers, email...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2023/03/trends-problem-522x292.jpg",
      cardName: "SEBASTIAN SCHEERER - MARCH 20, 2023",
      cardPara:
        "The Problem with Web Design Trends: Why Following Them Blindly Can Hurt Your Business",
      cardLine:
        "Web design trends come and go. Some trends stick around for a while, while others...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2014/02/type-522x292.jpg",
      cardName: "CARRIE COUSINS - JANUARY 28, 2023",
      cardPara: "17 Tips for Designing with Type on a Photo",
      cardLine:
        "One of the best techniques to have in your toolkit is designing with type on...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2020/11/website-design-preview-522x292.jpg",
      cardName: "NATALY BIRCH AND  ANDRIAN VALEANU - JANUARY 12, 2023",
      cardPara: "Website Design: The Ultimate Guide with Examples",
      cardLine:
        "With modern technologies getting more powerful and widely supported by curret browsers, the website has...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2021/04/Font-Psychology-1-522x292.jpg",
      cardName: "GERT SVAIKO - JANUARY 12, 2023",
      cardPara:
        "Font Psychology: Here's Everything You Need to Know About Fonts",
      cardLine:
        "There are over half a million fonts in the world. While most of the web...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2017/12/responsive-522x292.jpg",
      cardName: "ANDRIAN VALEANU - JANUARY 02, 2023",
      cardPara: "Responsive Web Design: 50 Examples and Best Practices",
      cardLine:
        "The number of handheld devices operating worldwide is growing exponentially. According to stats, more than...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2015/12/free-winter-icons-522x160.jpg",
      cardName: "NATALY BIRCH -  NOVEMBER 08, 2022",
      cardPara: "Season Icons: Winter Inpiration and Free Packages",
      cardLine:
        "It i hard to argues that winter is a mervelous and magical season. Being a...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2022/09/figma-website-522x292.jpg",
      cardName: "EUGENE - OCTOBER 24, 2022",
      cardPara: "How to Export Designs from Figma to Sitor.io",
      cardLine:
        "Siter.io is a design tool and website builder that lets you create and publish entire...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2022/04/create-status-page-522x292.jpg",
      cardName: "SAM NORTON - JULY 01, 2022",
      cardPara: "How to Build Public & Private Status Pages for Websites",
      cardLine:
        "Status pages are essential for many online businesses, applications, and platforms in today's fast-moving technology...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2022/05/create-badges-522x292.jpg",
      cardName: "SAM NORTON - MAY 26, 2022",
      cardPara:
        "How to Create an Uptime Status Badge and Inert It into Your Website",
      cardLine:
        "A status badge is an essential add-on weight component of a website as it provides...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2022/04/status-badges-522x292.jpg",
      cardName: "NATALY BIRCH AND ANDRIAN VALEANU - MAY 09, 2022",
      cardPara:
        "Best Status Website Badge Examples: How to Customize the Design",
      cardLine:
        "Do you know that visibility of system status is one of Jakob Nielsen's 10 heuristics...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2022/04/website-status-pages-522x292.jpg",
      cardName: "NATALY BIRCH AND ANDRIAN VALEANU - APRIL 27, 2022",
      cardPara:
        "Best Status Pages Examples: Advanced Customization, Design and Incident Reports",
      cardLine:
        "Expect companies to embrace transparency in platforms to reinforce relationships with the digital crowd and...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2021/01/Images-and-Videos-Accessible-522x292.jpg",
      cardName: "SUZANNE SCACCA - JULY 08, 2021",
      cardPara: "A Guide to Making Your Images and Videos Accessible",
      cardLine:
        "When you think of accessibility, do you envision things like ramps outside of restaurants or...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2018/07/dakr-pattern-522x292.jpg",
      cardName: "CARRIE COUSINS - JUNE 11, 2021",
      cardPara: "Everything You Need to Know About Dard Patterns",
      cardLine:
        "They are everywhere. Little tricks on webpages, in apps and with popups and forms that...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2020/12/featuredimages-cover-522x292.jpg",
      cardName: "SUZANNE SCACCA - NOVEMBER 21, 2020",
      cardPara:
        "How to Create Featured Images That Draw More Readers to Your Blog",
      cardLine:
        "You're familiar with how valuable impages are on a website. They can: Break up otherwise...",
    },
    {
      cardImg:
        "https://designmodo.com/wp-content/uploads/2020/11/sign-up-form-522x292.jpg",
      cardName: "SUZANNE SCACCA - NOVEMBER 16, 2020",
      cardPara: "Designing Email Signup Forms that Turn Visitors into Leads",
      cardLine:
        "Typically, there are three kinds of people that will visit your website: First-time visitors trying...",
    },
  ];

  return (
    <div className="w-full mt-12 mb-32 px-4 lg:px-16">
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
              <h1 className="text-[13px] font-semibold text-gray-400">
                {data.cardName}
              </h1>
              <h1 className="mt-2  text-[16px] hover:cursor-pointer  hover:text-blue-500 font-medium">
                {data.cardPara}
              </h1>
              <p className="mt-2 font-medium text-gray-600 hover:text-blue-500 text-xs hover:cursor-pointer">
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
