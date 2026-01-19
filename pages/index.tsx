import React from "react";
import heroImage from "@/constants/background-image.jpeg";
import SearchBar from "@/components/common/SearchBar";
import Pill from "@/components/common/Pill";
import { ListingManager } from "@/components/common/ListingManager";

const index = () => {
  return (
    <>
      <div
        className="grow flex items-center justify-center bg-cover bg-center 
        bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="text-center relative z-10 px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-md m-4">
            Welcome to Luxury Properties!!!
          </h1>
          <h2 className="mt-3 text-3xl font-semibold text-white drop-shadow-md">
            Find your favorite place here!
          </h2>
          <p className="mt-4 text-xl text-gray-100">
            We are glad that you are here. Explore and enjoy your experience.
          </p>
          <p className="mt-2 text-lg text-gray-200">
            The best prices for over 2 million properties worldwide.
          </p>
          <SearchBar />

          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Pill
              label="Villas"
              isActive={true}
              onClick={() => console.log("Villas clicked")}
            />
            <Pill
              label="Beachfront"
              onClick={() => console.log("Beachfront clicked")}
            />
            <Pill
              label="Under Ksh. 15,000"
              onClick={() => console.log("Price clicked")}
            />
            <Pill
              label="Pet Friendly"
              onRemove={() => console.log("Remove filter")}
            />
          </div>
          <button
            className="mt-8 px-8 py-3 bg-white text-indigo-600 rounded-full 
          font-bold hover:bg-gray-200 transition shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      <ListingManager />
    </>
  );
};

export default index;
