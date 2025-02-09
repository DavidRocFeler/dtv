"use client";
import { useState, useRef } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar: React.FC<{ onExpand: (expanded: boolean) => void }> = ({ onExpand }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpand(newExpandedState);
    
    if (!newExpandedState) {
      setInputValue(""); // Limpia el texto cuando se cierra
    }
    
    if (newExpandedState && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-row items-center">
      <form className="absolute right-[2.5rem] xxl:right-[5rem] w-[11.5rem] xs:w-[15rem] sm:w-[16.5rem] md:w-[15rem]">
        <input
          ref={inputRef}
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className={`absolute right-[0rem] top-[-0.75rem] text-[0.9rem] bg-transparent text-white placeholder-gray-400 rounded-tr-[8px] rounded-br-[8px] outline-none focus:border-[#E9E9E9] focus:ring-[1px] focus:ring-[#E9E9E9] transition-[width,opacity] duration-300 ease-in-out ${
            isExpanded
              ? "w-[10rem] xs:w-[13.5rem] sm:w-[15rem] md:w-[13.5rem] opacity-100 px-4 py-1"
              : "w-0 opacity-0 overflow-hidden px-0 py-1"
          }`}
          style={{
            transitionProperty: isExpanded ? 'width, opacity' : 'opacity',
            transitionDuration: '300ms'
          }}
        />
        {isExpanded && (
          <button 
            className="absolute bg-white left-[0rem] top-[-0.8rem] z-10 rounded-tl-[8px] rounded-bl-[8px]"
            style={{ padding: '0.42rem 0.3rem 0.42rem 0.5rem' }}
          >
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"  className="w-[15px] h-auto"  xmlns="http://www.w3.org/2000/svg">
              <path d="M2.14745 0.13212C0.814181 -0.44639 -0.499928 0.98648 0.189692 2.26611L2.84473 7.1969C3.0133 7.5149 3.32747 7.7256 3.68377 7.7716L10.4267 8.6145C10.557 8.6298 10.6566 8.7409 10.6566 8.8711C10.6566 9.0014 10.557 9.1125 10.4267 9.1278L3.68377 9.9707C3.32747 10.0167 3.0133 10.2312 2.84473 10.5454L0.189692 15.4838C-0.499928 16.7635 0.814181 18.1964 2.14745 17.6178L19.0776 10.281C20.3075 9.7485 20.3075 8.0015 19.0776 7.4689L2.14745 0.13212Z" fill="black"/>
            </svg>

          </button>
        )}
      </form>
      <button
        onClick={handleSearchClick}
        className=" text-gray-400 hover:text-gray-200 focus:outline-none"
      >
        <SearchIcon className="w-[1.3rem] h-[1.3rem]" />
      </button>
    </div>
  );
};

export default SearchBar;