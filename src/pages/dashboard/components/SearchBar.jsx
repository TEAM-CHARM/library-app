import React from "react";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="relative max-w-lg w-full">
      <input
        type="text"
        className="w-full h-12 px-5 pr-16 rounded-full border-2 border-primary-light focus:border-primary-dark focus:ring focus:ring-background-light shadow-sm text-md placeholder-gray-400 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.65 11a6.65 6.65 0 11-13.3 0 6.65 6.65 0 0113.3 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
