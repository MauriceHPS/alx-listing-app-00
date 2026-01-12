import { Home, Search, Castle, Trees } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* // Outer container */}

      <header
        className="sticky top-0 z-50 w-full bg-linear-to-r from-gray-200 to-gray-300 border-b border-gray-200 
      shadow-sm"
      >
        {/* Layout container for horizontal alignment using flexbox */}
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* LOGO */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-500 p-1.5 rounded-lg">
              {/* lucid-react icon */}
              <Home className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-indigo-800 hidden sm:block">
              Luxury Properties
            </span>
          </div>
          {/* SEARCH BAR */}
          <div className="grow max-w-md hidden md:flex relative">
            <input
              type="text"
              placeholder="Search for accommodations....."
              className="w-full pl-4 pr-10 py-2.5 rounded-full border border-gray-300 
              bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 
              focus:border-transparent transition-shadow shadow-sm"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-500 p-1.5 
            rounded-full text-white hover:bg-indigo-600 transition"
            >
              <Search size={16} />
            </button>
          </div>

          {/* ACCOMMODATION TYPES  */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 group text-gray-500 hover:text-black transition">
              <Home
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium">Rooms</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 group text-gray-500 
            hover:text-black -transition"
            >
              <Castle
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium">Mansion</span>
            </button>

            <button
              className="flex flex-col items-center gap-1 group text-gray-500 
            hover:text-black transition"
            >
              <Trees
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xs font-medium">Countryside</span>
            </button>
          </div>
          {/* SIGN UP AND SIGN IN */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              className="text-sm font-semibold text-gray-800 hover:bg-indigo-300 px-4 
            py-2 rounded-full transition"
            >
              Sign in
            </button>
            <button
              className="text-sm font-semibold text-white bg-indigo-500 hover:bg-black 
            px-4 py-2 rounded-full transition shadow-md"
            >
              Sign up
            </button>

            {/* SEARCH ICON FOR MOBILE DEVICES */}
            <button className="md:hidden p-2 text-gray-600">
              <Search size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
