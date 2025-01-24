import { useState, useRef } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Maneja el clic en el ícono de lupa
  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded && inputRef.current) {
      inputRef.current.focus(); // Enfoca el input si se expande
    }
  };

  return (
    <div className="flex items-center justify-end">
      {/* Input de búsqueda */}
      <input
        ref={inputRef}
        type="text"
        placeholder={isExpanded ? "Buscar..." : ""}
        className={`bg-transparent text-white placeholder-gray-400 border-2 border-[#4D4D4D] rounded-lg outline-none transition-all duration-300 ease-in-out focus:border-[#E9E9E9] focus:ring-2 focus:ring-[#E9E9E9] ${
          isExpanded ? "w-48 opacity-100 px-4" : "w-0 opacity-0 px-0"
        }`}
      />
      {/* Ícono de lupa */}
      <button
        onClick={handleSearchClick}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;