import React from "react";
import Home from "./ziffcodetech/ziffHome/Home";
import AboutUs from "./ziffcodetech/aboutZiff/aboutUs";
import NavBar from "./ziffcodetech/NavBar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import FooterComp from "./ziffcodetech/FooterComp"

const App = () => {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={AboutUs}/>
    </Routes>
    <FooterComp />
    </BrowserRouter>
   
  )
};

export default App;
