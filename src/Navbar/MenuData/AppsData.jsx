import { useState } from "react";

export default function AppsData({ title, paragraph }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="md:items-start   hover:bg-gray-300 rounded-md px-2 transform transition-all duration-500  hover:cursor-pointer md:border-none border border-gray-200/50 sm:text-lg  py-8 md:py-2 flex flex-col items-center w-full"
    >
      <h1
        className={`hover:text-blue-500 transition-all duration-200  font-bold  flex items-center gap-2 md:gap-1  text-black`}
      >
        <span className="material-symbols-outlined text-[25px]">token</span>
        <a href="#" className={` md:text-sm`}>
          {title}
        </a>
      </h1>

      {hover ? (
        <div className="flex mt-3 justify-center transition-all transform duration-500 gap-2 w-full ">
          <button className="bg-white hover:text-blue-500 transform transition-al duration-500 flex items-center justify-center gap-1 flex-1 text-gray-600 text-xs px-2 py-2 font-medium rounded-full">
            Learn More
            <i className="ri-arrow-right-s-line font-bold text-md"></i>
          </button>
          <button className="bg-white hover:text-blue-500 flex transform transition-all duration-500 items-center justify-center gap-1 flex-1 text-gray-600 text-xs font-medium px-2 py-2 rounded-full">
            Open App
            <i className="ri-arrow-right-s-line font-bold text-md"></i>
          </button>
        </div>
      ) : (
        <p className="text-xs text-center md:text-start mt-1 w-[80%] sm:w-[50%] md:w-[100%] text-gray-700">
          {paragraph}
        </p>
      )}
    </div>
  );
}
