// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./Taskheader.css"

// function Taskheader() {
//     return(
//         <div className="nav-bar">
//             <div className="nav-options">
//                 <div className="section" >Add Data</div>
//                 <div className="section" >View Data</div>
//             </div>
//         </div>
//     )
// }

// export default Taskheader;


import React from "react";
import { Link } from "react-router-dom";
import "./Taskheader.css";

function Taskheader() {
  return (
    <header className="header">
      <h2>Travel Explorer</h2>
      <nav>
        <Link to="/">Add Data</Link>
        <Link to="/view">View Data</Link>
      </nav>
    </header>
  );
}

export default Taskheader;
