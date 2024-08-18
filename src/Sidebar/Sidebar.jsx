import React, { useState } from 'react'
import './Sidebar.css'
import { Element3 , Diagram, ArrowUp, Eye, EyeSlash, FlashCircle, Home2 } from 'iconsax-react'
const Sidebar = () => {
  const [showInvestment, setShowInvestment] = useState(true);
  return (
    <div className='sidebar-container'>
      <div className='bg-dark  px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded'>

        <div className='d-flex flex-row justify-center align-content-center  align-items-center '>
          <div className=' '>
            <p className='text-white fs-6' >Total Investement</p>
            <div className='d-flex flex-row justify-between align-content-center '>
              <p className='text-white fs-6' >$</p>
              <p className='text-white fs-6 mx-1' >{showInvestment ? "909090" : "********"}</p>
              <div className='pointer'>
                {showInvestment ? <Eye size="15" color="#FF8A65" onClick={() => setShowInvestment(!showInvestment)} /> :
                  <EyeSlash size="15" color="#FF8A65" onClick={() => setShowInvestment(!showInvestment)} />}
              </div>
            </div>
          </div>
          <div className=' d-flex justify-content-center align-items-center align-content-center '>
            <p className='text-white text-center' style={{ fontSize: "10px" }} >18% <ArrowUp size="14" color="#FF8A65"/></p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
      </div>
      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4 custom-hover'>
        <Home2 size="20" color="black" />
        <span className=' mx-2' >Home</span>
      </div>

      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4 custom-hover'>
        <Element3 size="20" color="black"/>
        <span className=' mx-2' >Dashboard</span>
      </div>

      <div className=' px-2 py-2 mt-2 d-flex align-items-center justify-content-left rounded-4 custom-hover'>
        <Diagram size="20" color="black" />
        <span className=' mx-2' >Stock</span>
      </div>
  
      

    </div>
  )
};

export default Sidebar
