import React from "react";

const Password = () => {
  return (
    <>
      <hr className="mt-8 mb-6" />
      <div className="flex flex-col xl:flex-row xl:gap-8 gap-4">
        <div>
          <h1 className="font-semibold text-sm lg:text-base mb-2">Password</h1>
          <p className="text-xs text-gray-500">
            Leave password black if don't want to change.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:basis-1/2">
            <label htmlFor="currentPassword" className="text-xs text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full border rounded-md p-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>

          <div className="w-full md:basis-1/2">
            <label htmlFor="newPassword" className="text-xs text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full border rounded-md p-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div className="w-full flex lg:justify-center gap-4 mb-16">
        <div className="flex flex-col xl:justify-center gap-4">
          <div className="flex gap-2 ">
            <input type="checkbox" id="privacy" className="w-4 h-4" />
            <label
              htmlFor="privacy"
              className="text-xs text-gray-600 font-normal"
            >
              I agree to storage of my data according to {""}
              <span className="text-blue-500">Privacy Policy.</span>
            </label>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500/90 text-white text-sm p-3 rounded">
              Save changes
            </button>
            <button className="bg-gray-400 p-3 rounded text-sm text-white">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
