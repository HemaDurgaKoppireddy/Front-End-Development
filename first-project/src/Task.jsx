// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Taskheader from "./Taskheader"
// import AddData from "./AddData"
// import ViewData from "./ViewData"


// function Task() {
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Taskheader />} />
//             <Route path="/Adddata" element={<AddData />} />
//             <Route path="/Viewdata" element={<ViewData />} />
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }

// export default Task;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Taskheader";
import AddData from "./AddData";
import ViewData from "./ViewData";
import CardDetails from "./CardDetails";
import "./Task.css";

function Task() {
  const [places, setPlaces] = useState([]);

  const addPlace = (newPlace) => {
    setPlaces([...places, newPlace]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AddData addPlace={addPlace} />} />
        <Route path="/view" element={<ViewData places={places} />} />
        <Route path="/details/:id" element={<CardDetails places={places} />} />
      </Routes>
    </Router>
  );
}

export default Task;
