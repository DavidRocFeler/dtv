"use client"
import { IFaq } from '@/interface/globalTypes';
import styles from '../styles/FAQComponent.module.css';

interface FAQComponentProps extends IFaq {
  isActive: boolean;
  onClick: () => void; // Esta función viene del componente padre
}

const FAQComponent: React.FC<FAQComponentProps> = ({ 
  question, 
  answer, 
  isActive, 
  onClick 
}) => {
  return (
    <div className='w-[100%] pb-[1rem] text-[0.9rem] opacity-[0.8]'>
 
        <div className='w-[90%] flex flex-row'>
          {/* Contenedor de la pregunta (sin evento de clic) */}
          <h3 >{question}</h3>
          
          {/* Flecha interactiva */}
          <span 
            className={`${styles.Arrow} ${isActive ? styles.Active : ""}`} 
            onClick={onClick} // El clic solo funciona en la flecha
          >
            ▼
          </span>
        </div>
        
        <div className='w-[80%]'>
          {/* Respuesta (se muestra según isActive) */}
          {isActive && <p className='italic font-light'>{answer}</p>}
        </div>

    </div>
  );
};

export default FAQComponent;