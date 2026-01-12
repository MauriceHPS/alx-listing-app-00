import { PillProps } from "@/constants";
import React from "react";

const Pill: React.FC<PillProps> = ({ label, isActive, onRemove, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm 
        font-medium transition-all cursor-pointer select-none  
            ${
              isActive
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
            }
    `}
      >
        <span>{label}</span>

        {/* Render 'X' icon only if an onRemove function is provided */}
        {onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              onRemove();
            }}
            className={`ml-2 p-0.5 rounded-full hover:bg-black/20 focus:outline-none transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Pill;
