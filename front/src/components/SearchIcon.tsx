
interface SearchIconProps {
    className?: string; // Acepta className como prop opcional
  }
const SearchIcon:React.FC<SearchIconProps> = ({className}) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.1289 13.0122L20.1289 21.0122M15 8.5C15 12.0899 12.0899 15 8.5 15C4.91015 15 2 12.0899 2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5Z"
      stroke="#E9E9E9"
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;