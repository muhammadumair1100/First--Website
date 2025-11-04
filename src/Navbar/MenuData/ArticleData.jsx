import { Link } from "react-router-dom";

export default function ArticleData({ links, accTitle }) {
  const safeLink = links || "";
  const path = `/${safeLink.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="hover:text-blue-500 transition-all duration-500 w-full">
      <Link
        to={path}
        className=" relative inline-block md:hover:bg-gray-200/50 md:hover:text-blue-500 cursor-pointer text-center py-5 md:py-3 md:pl-4 md:text-start border w-full"
      >
        <p>
          {links}
          {accTitle}
        </p>
        <i className="ri-arrow-right-s-line hidden md:block absolute top-3 right-5 text-xl text-gray-500"></i>
      </Link>
    </div>
  );
}
