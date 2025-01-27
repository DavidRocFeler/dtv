"use client"; // Marca este componente como un componente del lado del cliente

import { useState, useRef } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar: React.FC<{ onExpand: (expanded: boolean) => void }> = ({ onExpand }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // Estado para controlar si la barra de búsqueda está expandida
  const inputRef = useRef<HTMLInputElement>(null); // Referencia al input de búsqueda

  // Maneja el clic en el ícono de lupa
  const handleSearchClick = () => {
    const newExpandedState = !isExpanded; // Cambia el estado de expansión
    setIsExpanded(newExpandedState); // Actualiza el estado local
    onExpand(newExpandedState); // Notifica al componente padre (Header) sobre el cambio

    // Enfoca el input si se expande
    if (newExpandedState && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-end relative">
      {/* Input de búsqueda */}
      <input
        ref={inputRef}
        type="text"
        placeholder={isExpanded ? "Search..." : ""} // Muestra el placeholder solo cuando está expandido
        className={`absolute right-[3rem] bg-transparent text-white placeholder-gray-400 border-2 border-[#4D4D4D] rounded-lg outline-none transition-all duration-300 ease-in-out focus:border-[#E9E9E9] focus:ring-2 focus:ring-[#E9E9E9] ${
          isExpanded
            ? "w-[10rem] sm:w-32 md:w-48 opacity-100 px-2 py-1 sm:px-4 sm:py-2" // Estilos cuando está expandido
            : "w-0 opacity-0 px-0" // Estilos cuando está contraído
        }`}
      />

      {/* Ícono de lupa */}
      <button
        onClick={handleSearchClick}
        className="p-2 text-gray-400 hover:text-gray-200 focus:outline-none ml-4" // Aumentamos el margen izquierdo (ml-4)
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;