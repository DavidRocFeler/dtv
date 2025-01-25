"use client"
import { IFaq } from '@/interface/globalTypes';
import styles from '../styles/FAQComponent.module.css';


const FAQComponent:React.FC<IFaq> = ({question,answer}) => {
  

  return (
    <div>
       <div className={styles.FaqContainer}>
      <h1 className='mb-2'>Frequently Asked Questions</h1>
        <div className={styles.FaqItem}>
          <h3 className={styles.Question}>{question}</h3>
          <p className={styles.Answer}>{answer}</p>
        </div>
    </div>
    </div>
  )
}

export default FAQComponent
