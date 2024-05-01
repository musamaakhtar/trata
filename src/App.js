import React from "react";
import { Routes } from "react-router-dom";
import {ThemeContext} from "./Contexts/ThemeContext";
import FinalRoute from "./FinalRoute";
// import App from "./App";
function App() {
  return (
    <ThemeContext>
      {/* <Routes> */}
      <FinalRoute/>
      {/* </Routes> */}
    </ThemeContext>
  );
}

export default App;

// import React from 'react';
// // import DarkPage from './pages/DarkPage';
// import LandingPage from './pages/LandingPage';

// function App() {
//   return (
//     <div className="App">
//      <LandingPage/>
//      {/* <DarkPage/> */}
//     </div>
//   );
// }

// export default App;
