function LoginSignUp() {
  return (
    <div className="login-signup flex gap-4 items-center justify-center">
      <button className="login-button hidden sm:block hover:text-blue-600">
        Log In
      </button>
      <button className="signup-button md:block hidden rounded-3xl bg-orange-500/70 hover:bg-orange-400 px-4 py-2 ">
        Sign Up
      </button>
      <button className="block md:hidden text-2xl">☰</button>
    </div>
  );
}

export default LoginSignUp;
