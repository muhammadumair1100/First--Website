import React, { useState, useContext, useEffect } from "react";
import PersonalDetail from "./PersonalDetail";
import Password from "./Password";
import userContext from "../../../../contextAPI/Context";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [publicName, setPublicName] = useState({
    firstName: "",
    lastName: "",
    publicName: "",
  });

  const { formData } = useContext(userContext);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    const matchUser = storedData.find((u) => u.email === formData.email);

    if (matchUser) {
      setPublicName({
        firstName: matchUser.firstName,
        lastName: matchUser.lastName,
        publicName: `${matchUser.firstName} ${matchUser.lastName}`, // MERGED
      });
    }
  }, [formData.email]);

  return (
    <div className="w-full flex justify-center px-6 sm:px-8 min-[800px]:px-14 lg:px-36 xl:px-48 py-8">
      <div className="w-full max-w-5xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-start gap-5 border-b mb-5">
          <Link
            to="/privacy"
            className={`cursor-pointer text-sm md:text-base transition duration-100 py-2 text-gray-600`}
          >
            Privacy
          </Link>
          <div
            className={`cursor-pointer text-sm md:text-base transition duration-100 py-2 ${"border-b-2 border-blue-500 text-blue-500"}`}
          >
            Settings
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-center xl:items-start gap-5 mt-10">
          {/* Left Section (70% on XL) */}
          <div className="flex flex-col xl:flex-row xl:gap-32 w-full xl:w-[60%]">
            <h1 className="font-semibold text-sm md:text-base">User Profile</h1>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-500">Avatar Image</p>
              <div className="flex mt-1 gap-2 items-center">
                <span className="material-symbols-outlined text-blue-600 text-[60px]">
                  token
                </span>
                <div>
                  <p className="text-sm md:text-base">Upload Picture</p>
                  <p className="text-[12px] md:text-[14px] text-gray-400">
                    Max file size is 1 MB (jpg, png).
                  </p>
                </div>
              </div>
              <div className="flex mt-4 items-center gap-1">
                <span className="text-xs">Or</span>
                <p className="border-b border-blue-300 text-blue-500 text-xs inline-block cursor-pointer">
                  Upload from Gravatar
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (30% on XL) */}
          <div className="flex w-full flex-col xl:w-[35%]">
            <label htmlFor="publicName">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-xs md:text-sm">Public Name</p>
                <p className="text-[11px] text-gray-500">Optional</p>
              </div>
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="publicName"
                defaultValue={publicName.publicName || ""}
                placeholder={"Public Name"} // ✅ context data show
                className="border rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <hr className="mt-10" />

        <PersonalDetail />
        <Password />
      </div>
    </div>
  );
};

export default UserProfile;
