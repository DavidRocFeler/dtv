import { useState, useRef, useEffect } from "react";
import { FaChevronDown  } from "react-icons/fa"; // Importa el ícono

type Option = string;

const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option>("Menu");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: Option[] = ["Home", "Wallet", "User", "Help", "Upload", "Log out"];

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute right-[2rem] top-1" ref={dropdownRef}>
      {/* Botón del menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white px-4 py-2 rounded bg-blue-500 flex items-center justify-between"
      >
        {selectedOption}
        <FaChevronDown className="ml-2 w-4 h-4" /> {/* Ícono más pequeño */}
      </button>

      {/* Opciones del menú */}
      {isOpen && (
        <ul className="relative top-0 left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black rounded shadow-lg z-50">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-white hover:bg-[#0d6efd] cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;