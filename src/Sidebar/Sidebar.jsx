import React, { useState } from 'react'
import './Sidebar.css'
import { ArrowUp, Eye, EyeSlash, FlashCircle, Home2 } from 'iconsax-react'
const Sidebar = () => {
  const [showInvestment, setShowInvestment] = useState(true);
  return (
    <div className='sidebar-container'>
      <div className='border px-2 py-2 mt-2 d-flex align-items-center justify-content-left'>

        <div className='d-flex flex-row justify-center align-content-center border align-items-center '>
          <div className='border '>
            <p className='text-white fs-6' >Total Investement</p>
            <div className='d-flex flex-row justify-between align-content-center border'>
              <p className='text-white fs-6' >$</p>
              <p className='text-white fs-6 mx-1' >{showInvestment ? "909090" : "********"}</p>
              <div className='pointer'>
                {showInvestment ? <Eye size="15" color="#FF8A65" onClick={() => setShowInvestment(!showInvestment)} /> :
                  <EyeSlash size="15" color="#FF8A65" onClick={() => setShowInvestment(!showInvestment)} />}
              </div>
            </div>
          </div>
          <div className='border d-flex justify-content-center align-items-center align-content-center '>
            <p className='text-white text-center' style={{ fontSize: "10px" }} >18% <ArrowUp size="14" color="#FF8A65"/></p>
          </div>
        </div>
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
