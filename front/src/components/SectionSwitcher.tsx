// components/SectionSwitcher.tsx
"use client"; // Necesario para usar hooks y manejar eventos en Next.js 14

import { useState } from "react";
import { useRouter } from "next/navigation"; // Para manejar la navegación
import { FaChevronDown } from "react-icons/fa"; // Ícono de flecha hacia abajo

const SectionSwitcher = () => {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState<string>("Section");

  // Definir todas las secciones disponibles
  const sections = ["Section", "Movies", "Series", "Animes"];

  // Función para cambiar la sección
  const changeSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentSection(sections[nextIndex]);
  };

  // Función para redirigir según la sección actual
  const enterSection = () => {
    if (currentSection === "Movies") {
      router.push("/movies");
    } else if (currentSection === "Series") {
      router.push("/series");
    } else if (currentSection === "Animes") {
      router.push("/animes");
    }
  };

  return (
    <div className="linksCategories flex items-center cursor-pointer">
      {/* Texto de la sección actual */}
      <p
        id="changeSection"
        className="mr-2"
        onClick={enterSection} // Redirige al hacer clic
      >
        {currentSection}
      </p>
      {/* Ícono de flecha hacia abajo */}
      <i id="categoryArrow" onClick={changeSection}>
        <FaChevronDown className="w-4 h-4" />
      </i>
    </div>
  );
};

export default SectionSwitcher;