import React from 'react'
import styles from '../styles/SideComponent.module.css'
import { footerSections } from '@/helpers/FooterSecction';
const SideSecction:React.FC = () => {
    return (
        <div className={styles.gridContainer}>
      <div className={styles.gridTable}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.gridItem}>
            {section}
          </div>
        ))}
      </div>
    </div>
      );
}

export default SideSecction
