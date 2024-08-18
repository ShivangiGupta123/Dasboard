import { ArrowDown, ArrowUp } from 'iconsax-react'
import React from 'react'

const PortfolioCard = ({ icon, title = "Title", totalShare = "000", profit = "0.00", inProfit = true }) => {
    return (
        <div className='border'>
            <div className='d-flex flex-row justify-content-start align-items-center align-content-center '>
                <div className='border rounded-circle d-flex justify-content-center align-items-center ' style={{ height: 30, width: 30 }} >
                    {icon}
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start align-items-center align-content-center'>
                <p>Total share</p>
                <p>$ {totalShare}</p>
            </div>
            <div className='d-flex flex-row justify-content-start align-items-center align-content-center'>
                <p>Total share</p>
                <p className={`${inProfit ? "text-white" : "text-danger"}`} > {inProfit ? "+" : "-"} {profit}  {inProfit ? <ArrowUp size="18" color="#FF8A65" /> : <ArrowDown size="18" color="#FF8A65" />} </p>
            </div>
        </div>
    )
}

export default PortfolioCard