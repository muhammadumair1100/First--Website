import IconName from "./IconeName";
import AppArticle from "./AppArticle";
import LoginSignUp from "./LogInSignUp";
function Navbar() {
  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-white">
      <nav className="Navbar  h-[70px] flex justify-between  items-center px-6 font-[Poppins] shadow-sm shadow-black-400">
        <IconName name="designmodo" />
        <AppArticle />
        <LoginSignUp />
      </nav>
    </header>
  );
}

export default Navbar;
