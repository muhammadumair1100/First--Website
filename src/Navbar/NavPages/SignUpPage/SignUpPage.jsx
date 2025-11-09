import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reTypePassword: "",
  });

  const [user, setUser] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [validation, setValidation] = useState(null);

  const navigate = useNavigate();

  const handleData = (e) => {
    setValidation("");
    setFormData((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const showValidation = (validMesg) => {
    setValidation(validMesg);
  };

  useEffect(() => {
    const oldUsersData = JSON.parse(localStorage.getItem("user")) || [];
    setUser(oldUsersData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.reTypePassword) {
      showValidation("Passwords do not match");
      return;
    }

    if (!isChecked) {
      showValidation("Agree the Privacy Policy");
      return;
    }

    const userExists = user.some((user) => user.email === formData.email);
    if (userExists) {
      showValidation("Email already registered log in instead");
      return;
    }

    const updateUser = [...user, formData];
    setUser(updateUser);
    localStorage.setItem("user", JSON.stringify(updateUser));

    navigate("/product");
    showValidation("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reTypePassword: "",
    });
  };

  return (
    <div className="pt-32 pb-12 mb-28 bg-gray-100/50 flex flex-col items-center justify-center">
      <h1 className="text-center font-medium text-xl">
        Start using Designmodo apps
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white mt-8 rounded-md  shadow-sm border p-10 w-[100%] max-w-md "
      >
        {/* Header */}

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300  rounded-lg py-3 px-4 transition-all hover:bg-gray-200 mb-6">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium text-sm md:text-md text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 font-medium">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {validation && (
          <div className="text-center mb-10 bg-red-100 shadow-xl text-red-500 rounded-xl p-5">
            <h1>{validation}</h1>
          </div>
        )}

        <div>
          {/* First Name Input */}
          <label
            htmlFor="firstName"
            className="block text-xs text-gray-700 font-normal mb-2"
          >
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            value={formData.firstName}
            name="firstName"
            onChange={handleData}
            id="firstName"
            required
            type="text"
            placeholder="Enter First Name"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
          />
        </div>

        <div>
          {/* Last Name Input */}
          <label
            htmlFor="lastName"
            className="block text-xs text-gray-700 font-normal mb-2"
          >
            Last Name <span className="text-red-500">*</span>
          </label>

          {/* Email Input */}
          <input
            value={formData.lastName}
            name="lastName"
            onChange={handleData}
            id="lastName"
            required
            type="text"
            placeholder="Enter Last Name"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
          />
        </div>

        <div>
          {/* Email Label */}
          <label
            htmlFor="email"
            className="block text-xs text-gray-700 font-normal mb-2"
          >
            Your Email <span className="text-red-500">*</span>
          </label>

          {/* Email Input */}
          <input
            value={formData.email}
            name="email"
            onChange={handleData}
            id="email"
            type="email"
            required
            placeholder="email@domain.com"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
          />
        </div>

        <div>
          {/* Email Label */}
          <label
            htmlFor="password"
            className="block text-xs text-gray-700 font-normal mb-2"
          >
            Password <span className="text-red-500">*</span>
          </label>

          {/* Email Input */}
          <input
            value={formData.password}
            name="password"
            onChange={handleData}
            id="password"
            type="password"
            required
            placeholder="Password"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
          />
        </div>

        <div>
          {/* Email Label */}
          <label
            htmlFor="retypePassword"
            className="block text-xs text-gray-700 font-normal mb-2"
          >
            Re-type Password <span className="text-red-500">*</span>
          </label>

          {/* Email Input */}
          <input
            value={formData.reTypePassword}
            name="reTypePassword"
            onChange={handleData}
            id="retypePassword"
            type="password"
            required
            placeholder="Re-type Password"
            className="w-full text-sm border border-gray-300 rounded-lg px-4 py-3 mb-6 hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all"
          />
        </div>

        {/* Checkbox */}

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-[20px] h-[20px] mt-1 cursor-pointer accent-blue-500"
          />
          <label className="text-gray-700 leading-snug pt-1 text-xs">
            I accept{" "}
            <span className=" underline font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-2">
          <button className=" flex-1 flex py-2 text-sm justify-center items-center gap-1 text-white font-medium rounded-md bg-green-600/90 hover:bg-green-700 transition-all transform">
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-winejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
