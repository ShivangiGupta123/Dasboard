import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Porfolio/Portfolio";
import { StockDetails } from "../StockDetails/StockDetails";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "blue" }}>
          <Sidebar />
        </div>
        <div className="col-md-10" style={{ backgroundColor: "red" }}>
          <Navbar />
          <div className="row">
            <div className="col-md-12" style={{ backgroundColor: "green" }}>
              <Portfolio />
            </div>
          </div>
            <div className="row">

           <div className="col-md-6"  style={{ backgroundColor: "brown" }}>
                 <StockDetails />
             </div>
             <div className="col-md-6"  style={{ backgroundColor: "orange" }}>
                 <StockDetails />
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
