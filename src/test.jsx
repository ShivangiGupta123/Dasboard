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

import React, { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (colors[index] !== "white") return; // Skip if the box is already clicked

    const newColors = [...colors];
    newColors[index] = "green";
    setColors(newColors);

    const newClickSequence = [...clickSequence, index];
    console.log("newClickSequence", newClickSequence)
    setClickSequence(newClickSequence);

    if (newClickSequence.length === 9) {
      changeToOrangeSequentially(newClickSequence);
    }
  };

  const changeToOrangeSequentially = (sequence) => {
    sequence.forEach((index, i) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = "orange";
          return newColors;
        });
      }, i * 300); // Delay of 300ms between each color change
    });
  };

  return (
    <div className="grid-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="grid-item"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}

export default App;


