import React from "react";
import { FaDesktop } from "react-icons/fa";

const MobileNotice = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md text-white p-4 rounded-xl border border-white/20 shadow-lg z-50 animate-fade-up">
      <div className="flex items-center gap-3">
        <FaDesktop className="text-2xl text-white/80" />
        <div>
          <h3 className="font-semibold">For Best Experience</h3>
          <p className="text-sm text-white/80">
            Please view this portfolio on a desktop device
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNotice;
