import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import userContext from "../../../contextAPI/Context";

export default function LoginPage() {
  const [validation, setValidation] = useState("");
  const [isChecked, setIsChecked] = useState({
    rememberCheck: false,
    agreePrivacy: false,
  });
  const [localForm, setLocalForm] = useState({ email: "", password: "" });

  const { setFormData } = useContext(userContext); // ✅ context
  const navigate = useNavigate();

  function handleChecks(e) {
    setIsChecked((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  }

  function handleData(e) {
    setLocalForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUser = JSON.parse(localStorage.getItem("user")) || [];
    const emailExist = getUser.find((u) => u.email === localForm.email);

    if (!emailExist) {
      setValidation("Email does not exist");
    } else if (emailExist.password !== localForm.password) {
      setValidation("Wrong password");
    } else if (!isChecked.agreePrivacy) {
      setValidation("Agree privacy policy");
    } else {
      setFormData(localForm); // ✅ context update
      navigate("/setting");
    }
  };

  return (
    <div className="pt-24 pb-12 mb-28 bg-gray-100/50 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-8 rounded-md shadow-sm border p-10 w-[100%] max-w-md"
      >
        <h1 className="text-center mb-6 font-medium text-xl">
          Login to Designmodo
        </h1>

        {/* Validation */}
        {validation && (
          <div className="text-center mb-10 bg-red-100 shadow-xl text-red-500 rounded-xl p-5">
            <h1>{validation}</h1>
          </div>
        )}

        {/* Email & Password Inputs */}
        <div>
          <label htmlFor="email" className="block text-xs text-gray-700 mb-2">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={localForm.email}
            onChange={handleData}
            required
            placeholder="email@domain.com"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6"
          />

          <label
            htmlFor="password"
            className="block text-xs text-gray-700 mb-2"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={localForm.password}
            onChange={handleData}
            required
            placeholder="Password"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-2 mb-4">
          <input
            onChange={handleChecks}
            name="rememberCheck"
            checked={isChecked.rememberCheck}
            type="checkbox"
            className="w-[20px] h-[20px] mt-1 cursor-pointer accent-blue-500"
          />
          <label className="text-gray-700 pt-1 text-xs">Remember me</label>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            onChange={handleChecks}
            name="agreePrivacy"
            checked={isChecked.agreePrivacy}
            type="checkbox"
            className="w-[20px] h-[20px] mt-1 cursor-pointer accent-blue-500"
          />
          <label className="text-gray-700 leading-snug pt-1 text-xs">
            I agree to my storage of my data according to{" "}
            <span className="text-blue-500 underline font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6 gap-2">
          <button className="flex-1 text-white font-medium bg-green-600 rounded-lg py-2 hover:bg-green-700">
            Login
          </button>
          <Link
            to="/signuppage"
            className="flex-1 text-white font-medium bg-blue-500 rounded-lg py-2 text-center hover:bg-blue-700"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
}
