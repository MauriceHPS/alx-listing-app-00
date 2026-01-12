import { PropertyProps } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

export const PropertyCard: React.FC<PropertyProps> = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  // Logic: Calculate price if discount exists
  // We check if discount is not empty string
  const hasDiscount = data.discount && data.discount !== "";

  // ParseInt to convert string "30" to number 30
  const discountValue = hasDiscount ? parseInt(data.discount) : 0;

  // Calculate final price
  const finalPrice = hasDiscount
    ? data.price - data.price * (discountValue / 100)
    : data.price;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Image Header */}
      <div className="relative h-64 w-full overflow-hidden shrink-0">
        {!imgError ? (
          <Image
            src={data.image}
            alt={data.name}
            fill //SOLVES "Missing Width" error
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimization hint
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)} //
          />
        ) : (
          // FALLBACK: Renders if image fails
          <div className="flex items-center justify-center h-full w-full bg-slate-200 text-slate-400">
            <div className="text-center p-4">
              <span className="text-4xl">🏠</span>
              <p className="text-xs font-bold mt-2 uppercase tracking-wide">
                {data.name} {/* 👈 Renders the Alt Text / Name */}
              </p>
            </div>
          </div>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
            -{data.discount}%
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
          {data.category[0]}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-800 line-clamp-1 mr-2">
            {data.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 bg-slate-50 px-2 py-1 rounded">
            <span className="text-amber-400 text-sm">★</span>
            <span className="text-sm font-semibold text-slate-700">
              {data.rating}
            </span>
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-4 truncate">
          📍 {data.address.city}, {data.address.country}
        </p>

        {/* Features Row */}
        <div className="flex gap-3 text-xs text-slate-400 mb-6 mt-auto">
          <span className="flex items-center gap-1">
            🛏 {data.offers.bed} Beds
          </span>
          <span className="flex items-center gap-1">
            🚿 {data.offers.shower} Baths
          </span>
          <span className="flex items-center gap-1">
            👥 {data.offers.occupants} Guests
          </span>
        </div>

        {/* Footer / Price */}
        <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-auto">
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            View Details
          </button>

          <div className="text-right">
            {hasDiscount && (
              <span className="block text-xs text-rose-400 line-through mb-0.5">
                ${data.price}
              </span>
            )}
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-xl font-bold text-slate-900">
                ${finalPrice.toFixed(0)}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                / night
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
