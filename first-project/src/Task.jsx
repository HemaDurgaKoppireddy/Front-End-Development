import React from "react";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskheader from "./Taskheader"
import AddData from "./AddData"
import ViewData from "./ViewData"


function Task() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Taskheader />} />
            <Route path="/Adddata" element={<AddData />} />
            <Route path="/Viewdata" element={<ViewData />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Task;