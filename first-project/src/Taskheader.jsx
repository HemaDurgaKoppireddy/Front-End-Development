import React from "react";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Taskheader.css"

function Taskheader() {
    return(
        <div className="nav-bar">
            <div className="nav-options">
                <div className="section" >Add Data</div>
                <div className="section" >View Data</div>
            </div>
        </div>
    )
}

export default Taskheader;