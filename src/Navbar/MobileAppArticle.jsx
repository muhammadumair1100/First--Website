import { useState } from "react";
import AppsData from "./MenuData/AppsData";
import ArticleData from "./MenuData/ArticleData";

export default function MobileAppArticle({ open }) {
  const [menu, setMenu] = useState({
    apps: false,
    article: false,
    accounts: false,
  });

  const toggleProducts = (p) => {
    setMenu((pro) => {
      return {
        apps: p === "apps" ? !pro.apps : false,
        article: p === "article" ? !pro.article : false,
        accounts: p === "accounts" ? !pro.accounts : false,
      };
    });
  };

  const artLinks = [
    { title: "Website Design" },
    { title: "Email Design" },
    { title: "Website Examples" },
    { title: "Email Marketing" },
    { title: "Website Tools" },
    { title: "Website Tools" },
    { title: "Bootstrap" },
    { title: "Resources" },
  ];

  const accData = [
    { accTitle: "Account" },
    { accTitle: "Aubscriptions" },
    { accTitle: "Billing" },
    { accTitle: "Contact with us" },
    { accTitle: "Sign out" },
  ];

  const menuData = [
    {
      menuTitle: "Postcards",
      menuParagraph:
        "Get started with the most advanced email builder for your next campaign or newletter.",
    },
    {
      menuTitle: "slides",
      menuParagraph:
        "A perfect tool to create website or prototype projects. It will fit all kinds of projects.",
    },
    {
      menuTitle: "startup",
      menuParagraph:
        "Create an amazing static website in minutes and export ready-to- use template.",
    },
  ];

  return (
    <div
      className={`absolute top-20 left-1/2 -translate-x-1/2 w-full bg-white shadow-xl z-40 
      transform transition-all duration-500 ease-in-out 
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"} 
      md:hidden`}
    >
      <div
        onClick={() => toggleProducts("apps")}
        className="border-y py-6 flex items-center justify-center gap-1 text-blue-600 cursor-pointer"
      >
        <a href="#" className="text-md font-medium">
          Apps
        </a>
        <i
          className={`ri-arrow-down-s-line text-blue-600 transition-transform duration-300 ${menu.apps ? "rotate-180" : ""}`}
        ></i>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
         ${menu.apps ? "max-h-[500px] opacity-100 " : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-100/50 ">
          {menuData.map((data, i) => (
            <AppsData
              key={i}
              title={data.menuTitle}
              paragraph={data.menuParagraph}
            />
          ))}
        </div>
      </div>

      <div
        onClick={() => toggleProducts("article")}
        className="border-y py-6 flex items-center justify-center gap-1 text-green-600 cursor-pointer"
      >
        <a href="#" className="text-md font-medium">
          Article
        </a>
        <i
          className={`ri-arrow-down-s-line text-green-600 transition-transform duration-300 ${menu.article ? "rotate-180" : ""}`}
        ></i>
      </div>

      <div
        className={`transition-all overflow-hidden duration-500 ease-in-out bg-gray-100/50 w-full ${menu.article ? "max-h-[600px]  opacity-100 " : "max-h-[0px] opacity-0"}`}
      >
        {artLinks.map((links, i) => (
          <ArticleData key={i} links={links.title} />
        ))}
      </div>

      <div
        onClick={() => toggleProducts("accounts")}
        className="border-y py-6 flex items-center justify-center gap-1 cursor-pointer"
      >
        <a href="#" className="text-md font-medium">
          Accounts
        </a>
        <i
          className={`ri-arrow-down-s-line transition-transform duration-300 ${menu.accounts ? "rotate-180" : ""}`}
        ></i>
      </div>
      <div
        className={`transition-all  overflow-hidden duration-500 ease-in-out bg-gray-100/50 w-full ${menu.accounts ? "max-h-[600px]  opacity-100 " : "max-h-[0px] opacity-0"}`}
      >
        {accData.map((acc, i) => (
          <ArticleData key={i} accTitle={acc.accTitle} />
        ))}
      </div>
    </div>
  );
}
