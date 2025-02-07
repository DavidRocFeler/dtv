import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { logout } from "@/utils/logout"; // ✅ Importamos la función logout

type Option = string;

const DropDown: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: Option[] = ["Home", "Wallet", "User", "Help", "Upload", "Log out"];

  const handleLogout = () => {
    logout(); // ✅ Elimina el token de las cookies y actualiza Zustand
    router.push("/"); // ✅ Redirige al usuario al home
  };

  const handleOptionClick = (option: Option) => {
    if (option === "Log out") {
      handleLogout();
    }
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
      {/* 🔥 SVG que funciona como botón en todos los dispositivos */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-center"
      >
        <svg width="24" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H18M0 7.2H15.6522M0 12H12.5217" stroke="white" strokeWidth="3"/>
        </svg>
      </button>

      {/* Opciones del menú */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-fit bg-black rounded shadow-lg z-50">
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
