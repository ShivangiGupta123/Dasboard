import React from 'react'
import './Sidebar.css'
import { FlashCircle, Home2 } from 'iconsax-react'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='border px-2 py-2 mt-2 d-flex align-items-center justify-content-left'>
        <FlashCircle size="20" color="#FF8A65" />
        <span className='text-white' >Kamlesh</span>
      </div>
      <div className='mt-4'>
      </div>

      <div className='border px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Home2 size="20" color="#FF8A65" />
        <span className='text-white mx-2' >Kamlesh</span>
      </div>

      <div className='border px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Home2 size="20" color="#FF8A65" />
        <span className='text-white mx-2' >Kamlesh</span>
      </div>
      <div className='border px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4'>
        <Home2 size="20" color="#FF8A65" />
        <span className='text-white mx-2' >Kamlesh</span>
      </div>

    </div>
  )
};

export default Sidebar
