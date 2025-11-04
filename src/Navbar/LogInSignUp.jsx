import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function LoginSignUp({ open, setOpen }) {
  return (
    <div className="login-signup flex gap-4 items-center justify-center">
      <Link
        to="/LoginPage"
        className="login-button hidden sm:block hover:text-blue-600"
      >
        Log In
      </Link>
      <Link
        to="SignUpPage"
        className="signup-button md:block hidden rounded-3xl bg-orange-500/70 text-sm text-white hover:bg-orange-400 px-3 py-[8px] "
      >
        Sign Up
      </Link>
      <button
        className="block md:hidden rounded-full h-[35px] w-[35px] hover:bg-black/10 transition-all duration-200 flex items-center justify-center text-2xl relative w-6 h-6"
        onClick={() => setOpen(!open)}
      >
        <Menu
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  inset-0 transition-all duration-500 ${
            open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 transition-all duration-500 ${
            open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}

export default LoginSignUp;
