import React from 'react'
import { ChatData } from '../context/ChatContext';

const Header = () => {
    const chat=ChatData();
  return (
    <div>
    
      <p className='text-lg mb-6'> Hello , How can i help you today ?</p>
    {chat && chat.length===0 && ( <p className='text-lg mb-6'>Create a new chat to continue?</p>)}
    </div>
  )
}

export default Header
