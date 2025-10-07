function Headings({ title, description }) {
  console.log(title);
  return (
    <div className="headings p-6 ">
      <span className="text-sm text-white bg-green-600 px-3  rounded-full">
        FREE
      </span>
      <h1 className="text-xl font-semibold mt-2">{title}</h1>
      <p className="text-gray-600 mt-2 text-[14px] font-normal">
        {description}
      </p>
      <button className="mt-12 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-200 rounded-md">
        Use in editor <i className="ri-arrow-right-up-line"></i>
      </button>
    </div>
  );
}
export default Headings;
