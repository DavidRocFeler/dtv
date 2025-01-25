"use client"; // Marca este componente como un componente del lado del cliente

import { useState, useRef } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Maneja el clic en el ícono de lupa
  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && inputRef.current) {
      inputRef.current.focus(); // Enfoca el input si se expande
    }
  };

  return (
    <div className="flex items-center justify-end">
      {/* Input de búsqueda */}
      <input
        ref={inputRef}
        type="text"
        placeholder={isExpanded ? "Search..." : ""}
        className={`bg-transparent text-white placeholder-gray-400 border-2 border-[#4D4D4D] rounded-lg outline-none transition-all duration-300 ease-in-out focus:border-[#E9E9E9] focus:ring-2 focus:ring-[#E9E9E9] ${
          isExpanded ? "w-32 md:w-48 opacity-100 px-4 py-2" : "w-0 opacity-0 px-0"
        }`}
      />
      {/* Ícono de lupa */}
      <button
        onClick={handleSearchClick}
        className="p-2 text-gray-400 hover:text-gray-200 focus:outline-none"
      >
        <SearchIcon className="w-6 h-6 ml-[1rem]" />
      </button>
    </div>
  );
};

export default SearchBar;