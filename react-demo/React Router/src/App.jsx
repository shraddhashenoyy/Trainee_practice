import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App(){
  return(
     <BrowserRouter>
      <Routes>
          <Route path="Home" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
      </Routes>
  </BrowserRouter>
);
}
export default App;