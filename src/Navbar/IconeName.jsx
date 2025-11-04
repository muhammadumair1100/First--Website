import { Link } from "react-router-dom";

function IconName({ name }) {
  return (
    <div>
      <Link
        to="/"
        className=" font-bold flex items-center gap-2  hover:text-blue-600"
      >
        <span className="material-symbols-outlined text-[35px]">token</span>
        <p className="text-lg">{name}</p>
      </Link>
    </div>
  );
}
export default IconName;
