function IconeQuestion() {
  return (
    <div className="icon-question flex gap-2 p-2 ">
      <div>
        <span className="material-symbols-outlined text-[40px] text-black pt-7 ">
          token
        </span>
      </div>
      <div>
        <p className="bg-blue-100/50 hover:bg-green-600 transition-colors duration-200 hover:text-white rounded-t-2xl text-sm rounded-br-2xl text-black p-2 flex items-center">
          ask questions?
        </p>
      </div>
    </div>
  );
}

export default IconeQuestion;
