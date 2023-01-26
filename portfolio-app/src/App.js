import './App.css';
import React from "react";

import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Proyects from "./components/proyects/proyects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className='app_main'>
      <Home/>
      <Navbar/>
      <About/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;