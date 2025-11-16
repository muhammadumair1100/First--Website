import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="w-full flex justify-center  px-6 sm:px-8 min-[800px]:px-14 lg:px-36 xl:px-48 py-8">
      <div className="w-full max-w-5xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-start gap-5 border-b mb-5">
          <div
            className={`cursor-pointer text-sm md:text-base transition duration-100 py-2 ${"border-b-2 border-blue-500 text-blue-500"}`}
          >
            Privacy
          </div>
          <Link
            to="/setting"
            className={`cursor-pointer text-sm md:text-base transition duration-100 py-2 text-gray-600 `}
          >
            Settings
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 mt-10 mb-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl lg:text-2xl  font-semibold">
              Accessing Your Personal Information
            </h1>
            <p className="text-gray-600 text-sm">
              If you erase your personal data you will no longer be able to
              access your account and any of your purchased products.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-xs mt-4">
            <label className="flex gap-1 items-center text-gray-600">
              <input type="radio" name="same" className="w-3 h-3" />
              Export Personal Data
            </label>
            <label className="flex gap-1 items-center text-gray-600">
              <input type="radio" name="same" className="w-3 h-3" />
              Erase Personal Data
            </label>
          </div>
          <div className="flex gap-3 mt-5">
            <button className="bg-blue-500 font-medium text-white p-2 text-xs rounded-md">
              Make Request
            </button>
            <button className="bg-gray-500/70 font-medium text-white p-2 text-xs rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
