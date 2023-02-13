import './navbar.css';
import React, { useState, useEffect } from "react";

function Navbar({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [sticky, setSticky] = useState(false);
  const navRef = React.useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); ;
  });

  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight - 48) setSticky(true);
    else setSticky(false);
  };

  const handleClickHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickProyects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={navRef} className={sticky ? "sticky" : "navbar_app"}>
      <div className='navbar_options'>
        <button onClick={handleClickHome}>Home</button>
        <button onClick={handleClickAbout}>About</button>
        <button onClick={handleClickProyects}>Proyects</button>
        <button onClick={handleClickContact}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;