import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { logout } from "@/utils/logout";
import styles from '../styles/DropdDown.module.css'
import Link from "next/link";
import { Bell } from "lucide-react";
import { notificationsHelpers } from "@/helpers/Notifications.helper";
import Notifications from "./Notifications";

const DropDown: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [notificationCount, setNotificationCount] = useState<number>(notificationsHelpers.length);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleBellClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNotificationsOpen(!isNotificationsOpen);
    setNotificationCount(0);

    // Configurar el temporizador para mostrar el contador después de 10 minutos
    setTimeout(() => {
      setNotificationCount(notificationsHelpers.length);
    }, 600000);
  };

  const handleNotificationsClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNotificationsOpen(false);
  };

  const handleOverlayClick = () => {
    setIsNotificationsOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón de hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center z-50 relative"
      >
        <svg width="24" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H18M0 7.2H15.6522M0 12H12.5217" stroke="white" strokeWidth="3"/>
        </svg>
      </button>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[70%] md:w-[60%] xxl:w-[30%] h-screen bg-black z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center items-center pt-[5rem] relative">
          {/* Contenedor de la campana y notificaciones */}
          <div className="absolute top-8 right-8">
            <Bell 
              className="text-[#C7C7C7] cursor-pointer hover:text-white transition-colors"
              onClick={handleBellClick}
            />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}

            {/* Panel de Notificaciones */}
            {isNotificationsOpen && (
              <div className="absolute top-[2.5rem] right-0 h-[35rem] w-[150px] xxs:w-[180px] xs:w-[200px] s:w-[300px] bg-[#141414] rounded-[10px] z-[60]">
                <div className="flex flex-col p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-lg font-semibold">Notifications</h2>
                    <button 
                      onClick={handleNotificationsClose}
                      className="text-[#C7C7C7] hover:text-white transition-colors hidden xs:block"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-[#C7C7C7] h-[30rem] overflow-y-auto">
                    {notificationsHelpers.map((item) => (
                      <Notifications
                      key={item.id}
                      {...item}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <img className="rounded-full w-[3rem] h-auto mb-[3rem] cursor-pointer" src="/profilePicture.jpg" alt="Profile" />
          <Link href='' className={styles.DropDownMenu}>Wallet</Link>
          <Link href="/home" className={styles.DropDownMenu}>Home</Link>
          <Link href='' className={styles.DropDownMenu}>Upload Stream</Link>
          <Link href='' className={styles.DropDownMenu}>Settings</Link>
          <Link href='' className={styles.DropDownMenu}>Help</Link>
          <button onClick={handleLogout} className={styles.DropDownMenu}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;