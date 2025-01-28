import React from 'react'
import FAQComponent from './FAQComponent'
import SideSecction from './FooterSecction'
import { FaqsHelpers } from '../helpers/Faqs.helpers';

const Foooter:React.FC = () => {
  return (
    <div className='flex flex-row'>
     <div className='hidden mdd:block'>
     { FaqsHelpers.map((item)=>
        (<FAQComponent
          key={item.id} 
          question={item.question} 
          answer={item.answer}
          
        />)
      ) 
    }
     </div>
     
      <SideSecction/>
    </div>
  )
}

export default Foooter
