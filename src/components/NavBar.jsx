// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/unit1" activeClassName="active">Unit 1</NavLink></li>
        <li><NavLink to="/unit2" activeClassName="active">Unit 2</NavLink></li>
        <li><NavLink to="/unit3" activeClassName="active">Unit 3</NavLink></li>
        <li><NavLink to="/unit4" activeClassName="active">Unit 4</NavLink></li>
        <li><NavLink to="/unit5" activeClassName="active">Unit 5</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
