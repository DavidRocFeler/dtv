import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; // Importa el ícono

type Option = string;

const DropDown:React.FC = () => {
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
    <div className="relative" ref={dropdownRef}>
      {/* Botón del menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-custom-gradient text-white px-4 py-2 rounded flex items-center justify-between`}
      >
        {selectedOption}
        <FaChevronDown className="ml-2 w-4 h-4" /> {/* Ícono más pequeño */}
      </button>

      {/* Opciones del menú */}
      {isOpen && (
        <ul className="absolute  rigth-[2rem] mt-2 w-fit bg-black rounded shadow-lg z-50">
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