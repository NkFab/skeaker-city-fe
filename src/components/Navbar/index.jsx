import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} width="209" height="45" alt="" />
      </NavLink>

      <NavLink className="nav-link" to="/cart">
        Cart
      </NavLink>
    </nav>
  );
}

export default Navbar;
