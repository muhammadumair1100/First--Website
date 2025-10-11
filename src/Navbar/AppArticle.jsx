function AppArticle() {
  return (
    <div className="hidden md:block md:flex gap-10">
      <div className="search  flex items-center justify-center gap-1 hover:text-blue-600">
        <a href="#" className="text-md font-extra-thick">
          Apps
        </a>
        <span className="">
          <i className="ri-arrow-down-s-line text-gray-500 hover:text-blue-600"></i>
        </span>
      </div>
      <div className="search  flex justify-center items-center gap-1 hover:text-blue-600">
        <a href="#" className="text-md font-normal">
          Articles
        </a>
        <span>
          <i className="ri-arrow-down-s-line text-gray-500"></i>
        </span>
      </div>
    </div>
  );
}

export default AppArticle;
