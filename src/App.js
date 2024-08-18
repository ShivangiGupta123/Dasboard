import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}




export default App
// import React, { useState } from "react";
// import "./App.css";
// function App() {
//   const [colors, setColors] = useState(Array(9).fill(false));

//   const handleClick = (index) => {
//     const newColor = [...colors];
//     if (index === 8) {
//       setColors(Array(9).fill("orange"));
//     } else {
//       newColor[index] = "green";

//       setColors(newColor);
//     }
//   };
//   return (
//     <>
//       <div className="grid-container">
//         {colors?.map((color, index) => (
//           <div
//             key={index}
//             className="grid-item"
//             onClick={() => handleClick(index)}
//             style={{ backgroundColor: color ? color : "white" }}
//           ></div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
// ==========================




