import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import MyComponent from './MyComponent'
// import FormComponent from './FormComponent'
// import Logo from "./assets/logo-img.png";
// import Cards from "./Cards";
// import "./Cards.css"
// import Component1 from "./Component1";
// import Component2 from "./Component2";
// import SearchCards from './SearchCards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RoutePaths from "./RoutePaths";
// import CardsRouting from "./CardsRouting";
import ImageUploadmethod1 from "./ImageUpload-method1";
import ImageUploadmethod2 from "./ImageUpload-method2";
// import SearchCards from "./SearchCards";


function App() {
  return (
    <>

      {/* <SearchCards /> */}
      {/* <CardsRouting /> */}

      {/* <ImageUploadmethod1 /> */}
      <ImageUploadmethod2 />

    </>
  );
}

export default App;
