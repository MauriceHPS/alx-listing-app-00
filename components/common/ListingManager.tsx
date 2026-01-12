"use client";

import React, { useState } from "react";
import { PropertyCard } from "./PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export const ListingManager: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data to get only the 6 items for the current page
  const currentProperties = PROPERTYLISTINGSAMPLE.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(PROPERTYLISTINGSAMPLE.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Exclusive Stays
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, PROPERTYLISTINGSAMPLE.length)} of{" "}
          {PROPERTYLISTINGSAMPLE.length} properties
        </p>
      </div>

      {/* Grid Container
         key={currentPage} ensures the component re-renders and animates when page changes
      */}
      <div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
      >
        {currentProperties.map((property, index) => (
          // Using a composite key for uniqueness
          <PropertyCard key={`${currentPage}-${index}`} data={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-16 gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2 hidden sm:flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                    currentPage === number
                      ? "bg-slate-800 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          {/* Mobile Text Indicator (Visible only on small screens) */}
          <span className="sm:hidden text-sm font-medium text-slate-600">
            Page {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
