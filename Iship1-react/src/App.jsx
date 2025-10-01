import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CSSLevels from './pages/CSSLevels'
import DSALevels from './pages/DSALevels'
import HTMLLevels from './pages/HTMLLevels';
import JSLevels from './pages/JSLevels';
import CompilerGeneral from './pages/CompilerGeneral'

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/CSSLevels" element={<CSSLevels />} />
    //     <Route path="/DSALevels" element={<DSALevels />} />
    //   </Routes>
    // </Router>
    // <DSALevels />
    // <CSSLevels />
    // <HTMLLevels />
    <CompilerGeneral />
  )
}

export default App
