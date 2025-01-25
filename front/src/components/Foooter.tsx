import React from 'react'
import FAQComponent from './FAQComponent'
import SideSecction from './FooterSecction'
import { FaqsHelpers } from '../helpers/Faqs.helpers';

const Foooter:React.FC = () => {
  return (
    <div className='flex flex-row'>
     { FaqsHelpers.map((item)=>
        (<FAQComponent
          key={item.id} 
          question={item.question} 
          answer={item.answer}
          
        />)
      ) 
    }
      <SideSecction/>
    </div>
  )
}

export default Foooter
