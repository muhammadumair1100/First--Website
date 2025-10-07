function LoginSignUp() {
  return (
    <div className="login-signup flex gap-4 items-center justify-center">
      <button className="login-button hover:text-blue-600">Log In</button>
      <button className="signup-button rounded-3xl bg-orange-300 hover:bg-orange-400 px-4 py-2 ">
        Sign Up
      </button>
    </div>
  );
}

export default LoginSignUp;
