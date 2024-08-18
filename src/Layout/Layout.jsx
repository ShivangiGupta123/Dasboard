import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Porfolio/Portfolio";
import { StockDetails } from "../StockDetails/StockDetails";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" style={{ backgroundColor: "white" }}>
          <Sidebar />
        </div>
        <div className="col-md-10" style={{ backgroundColor: "red" }}>
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
