// ...existing code...
import { useContext, useEffect, useState } from "react";
import React from "react";
import userContext from "../../../../contextAPI/Context";

function PersonalDetail() {
  const { formData } = useContext(userContext);

  const [localData, setLocalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user")) || [];

    const matchedUser = storedData.find((u) => u.email === formData.email);

    if (matchedUser) {
      setLocalData({
        firstName: matchedUser.firstName || "",
        lastName: matchedUser.lastName || "",
        email: matchedUser.email || "",
      });
    }
  }, []);

  return (
    <section className="w-full flex flex-col xl:flex-row xl:gap-10 gap-5 mt-8">
      {/* left side  */}
      <div>
        <h1 className="text-sm lg:text-base font-semibold mb-2">
          Personal Detail
        </h1>
        <p className="text-xs text-gray-500">
          Your personal information is never shown to other users.
        </p>
      </div>

      {/* right side  */}
      <div>
        <div className="flex flex-wrap gap-4">
          {/* First Name */}
          <div className="w-full md:w-[47%]">
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-600 mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={localData.firstName}
              onChange={(e) => setLocalData(e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-[47%]">
            <label
              htmlFor="lastName"
              className="block text-sm text-gray-600 mb-1"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={localData.lastName}
              className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter last name"
            />
          </div>

          {/* Email */}
          <div className="w-[97%]">
            <label
              htmlFor="emailAddress"
              className="block text-sm text-gray-600 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              value={localData.email}
              className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>

          <div>
            <h1 className="border-b text-blue-600 hover:bg-blue-100 hover:cursor-pointer">
              Edit Invoice Details
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalDetail;
// ...existing code...
