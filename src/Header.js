import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="header">

      <div className="header-bar">
        Mahesh Event Plannings
      </div>

      {/* MENU ICON */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <div className={`buttonsheader ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/service" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          Service
        </NavLink>

        <NavLink to="/gallery" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/packages" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          Packages
        </NavLink>

        <NavLink to="/about" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          About Us
        </NavLink>

        <NavLink to="/contact" 
          className={({isActive}) => isActive ? "active" : ""} 
          onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

      </div>

    </aside>
  );
};

export default Header;