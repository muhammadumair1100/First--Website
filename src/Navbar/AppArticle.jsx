import { useState } from "react";
import AppsData from "./MenuData/AppsData";
import ArticleData from "./MenuData/ArticleData";
// import { useParams, Link } from "react-router-dom";

function AppArticle() {
  const appsData = [
    {
      menuTitle: "Postcards",
      menuParagraph:
        "Get started with the most advanced email builder for your next campaign or newsletter.",
    },
    {
      menuTitle: "Slides",
      menuParagraph:
        "A perfect tool to create website or prototype projects. It will fit all kinds of projects.",
    },
    {
      menuTitle: "Startup",
      menuParagraph:
        "Create an amazing static website in minutes and export ready-to-use template.",
    },
  ];

  const artData = [
    { title: "Website Design" },
    { title: "Email Design" },
    { title: "Website Examples" },
    { title: "Email Marketing" },
    { title: "Website Tools" },
    { title: "Website Tools" },
    { title: "Bootstrap" },
    { title: "Resources" },
  ];

  const [show, setShow] = useState({
    apps: false,
    article: false,
  });

  const showToggle = (m) => {
    setShow((prev) => {
      return {
        apps: m === "apps" ? !prev.apps : false,
        article: m === "article" ? !prev.article : false,
      };
    });
  };

  return (
    <div className="hidden md:block md:flex gap-10 relative z-50">
      <div
        onClick={() => showToggle("apps")}
        className="search flex items-center justify-center gap-1 hover:text-blue-600"
      >
        <a href="#" className="text-md font-extra-thick">
          Apps
        </a>
        <span>
          <i className="ri-arrow-down-s-line text-gray-500 hover:text-blue-600"></i>
        </span>
      </div>

      <div
        className={`absolute border flex flex-col gap-2  transform transition-all duration-500 md:shadow-xl md:px-2 md:py-3 rounded-xl top-12  -translate-x-1/2 md:w-[17rem] md:bg-white
           ${
             show.apps
               ? "opacity-100 visible translate-y-0 pointer-events-auto"
               : " invisible pointer-events-none opacity-0 -translate-y-5 "
           }`}
      >
        {appsData.map((data, i) => (
          <AppsData
            key={i}
            title={data.menuTitle}
            paragraph={data.menuParagraph}
          />
        ))}
      </div>

      <div
        onClick={() => showToggle("article")}
        className="search flex justify-center items-center gap-1 hover:text-blue-600"
      >
        <a href="#" className="text-md font-normal">
          Articles
        </a>
        <span>
          <i className="ri-arrow-down-s-line text-gray-500"></i>
        </span>
      </div>

      <div
        className={`bg-white shadow-xl transform transition-all duration-500 rounded-xl absolute z-40 top-12 left-1/2 -translate-x-1/2 ${
          show.article
            ? "opacity-100 pointer-events-auto translate-y-0 "
            : "opacity-0 pointer-events-none -translate-y-5 "
        } md:w-[28rem]`}
      >
        <div className="grid grid-cols-2 bg-white rounded-xl">
          {artData.map((item, i) => (
            <ArticleData key={i} links={item.title} />
          ))}
        </div>

        <div className="relative hover:text-blue-500 hover:bg-gray-200">
          <a href="#" className="hidden md:block md:py-3 md:pl-4">
            View All Articles
            <i className="ri-arrow-right-s-line absolute text-xl right-5 md:hover:text-blue-500 text-gray-500 hidden md:inline-block "></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppArticle;
