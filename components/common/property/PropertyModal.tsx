import { PropertyModalProps } from "@/constants";
import { X } from "lucide-react";
import React from "react";
import PropertyDetail from "./PropertyDetail";

const PropertyModal: React.FC<PropertyModalProps> = ({
  isOpen,
  onClose,
  property,
}) => {
  if (!isOpen || !property) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      >
        {/* Modal Content */}
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-white 
        rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200
        "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 text-slate-800 rounded-full 
            transition-all shadow-sm
            "
          >
            {/* lucide-react icon */}
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto grow">
            <PropertyDetail property={property} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyModal;
