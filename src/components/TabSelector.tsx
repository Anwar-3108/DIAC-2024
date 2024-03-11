import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`mr-8 group inline-flex items-center px-0 font-bold py-4 border-b-2  text-sm leading-relaxed cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-red-800 text-red-800 focus:outline-none text-xl focus:text-red-800 focus:border-x-red-800"
        : "border-transparent text-gray-500 hover:text-gray-600 text-xl hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
