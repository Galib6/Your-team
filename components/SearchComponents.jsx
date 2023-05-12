import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const SearchComponents = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaUser className="text-gray-500" />
      </div>
      <input
        type="text"
        className="pl-10 pr-20 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 w-full"
        placeholder="Search"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 focus:outline-none"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponents;
