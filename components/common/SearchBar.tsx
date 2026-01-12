import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = query.toLowerCase();

    // Routing logic that is expandable
    if (searchTerm.includes("villa") || searchTerm.includes("houses")) {
      console.log("Redirecting to Properties Page...");
    } else if (
      searchTerm.includes("check-in") ||
      searchTerm.includes("policy")
    ) {
      console.log("Redirecting to FAQ/Help Page...");
    } else if (
      searchTerm.includes("offer") ||
      searchTerm.includes("discount")
    ) {
      console.log("Redirecting to Promotions Page...");
    } else {
      console.log("Performing general site search for:", searchTerm);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="mt-8 w-full max-w-4xl bg-white p-2 rounded-full flex flex-col 
        md:flex-row items-center"
      >
        {/* Search input */}
        <div className="grow flex item-center w-full px-4 mb-2 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="What are you looking for? (e.g. VIllas, Check-in, Offers)"
            className="w-full text-gray-700 placeholder-gray-400 focus:outline-none 
            bg-transparent py-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Visual separation */}
        <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>
        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-indigo-600 
            text-white font-bold rounded-full hover:bg-indigo-700 transition duration-200
        "
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
