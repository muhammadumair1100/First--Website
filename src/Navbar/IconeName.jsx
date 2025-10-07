function IconName({ name }) {
  return (
    <div>
      <h1 className=" font-bold flex items-center gap-2  hover:text-blue-600">
        <span className="material-symbols-outlined text-[35px]">token</span>
        <a href="#" className="text-lg">
          {name}
        </a>
      </h1>
    </div>
  );
}
export default IconName;
