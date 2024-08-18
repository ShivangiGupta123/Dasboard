import React from 'react'
import './Sidebar.css'
import { Diagram, Element3, FlashCircle, Home2 } from 'iconsax-react'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-center'>
        <FlashCircle size="20" color="black" />
        <span className='' >Stock Market</span>
      </div>
      <div className='mt-4'>
      </div>
      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Home2 size="20" color="black" />
        <span className=' mx-2' >Home</span>
      </div>

      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Element3 size="20" color="black"/>
        <span className=' mx-2' >Dashboard</span>
      </div>

      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Diagram size="20" color="black" />
        <span className=' mx-2' >Stock</span>
      </div>
  
      

    </div>
  )
};

export default Sidebar
