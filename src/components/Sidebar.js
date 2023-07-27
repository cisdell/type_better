import React from 'react'

//components.
import Profile from './Profile'
import Timer from './Timer';
import Lifeblocks from './Lifeblocks';


//styles
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>WELCOME!
    <Profile/>
      <div className="Sidebar-content">
        sidebar Content

      </div>
    </div>
  )
}
