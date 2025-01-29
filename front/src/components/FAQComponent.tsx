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
    <div className={styles.FaqContainer}>
      <div className={styles.FaqItem}>
        <div className={styles.QuestionWrapper}>
          {/* Contenedor de la pregunta (sin evento de clic) */}
          <h3 className={styles.Question}>{question}</h3>
          
          {/* Flecha interactiva */}
          <span 
            className={`${styles.Arrow} ${isActive ? styles.Active : ""}`} 
            onClick={onClick} // El clic solo funciona en la flecha
          >
            ▼
          </span>
        </div>

        {/* Respuesta (se muestra según isActive) */}
        {isActive && <p className={styles.Answer}>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQComponent;