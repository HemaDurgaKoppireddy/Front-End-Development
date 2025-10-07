import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import MyComponent from './MyComponent'
// import FormComponent from './FormComponent'
import Logo from "./assets/logo-img.png";
import Cards from "./cards";
// import "./Cards.css"
import Component1 from "./Component1";
import Component2 from "./Component2";
import SearchCards from './SearchCards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";

function RoutePaths() {
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/profile" element= {<Profile />} />
          <Route path="/profile" element= {<PageNotFound />} />
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default RoutePaths;
