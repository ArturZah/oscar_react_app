import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <h2 className="nav-logo">Oscars 2019</h2>
        <ul className="nav-menu">
          <li><NavLink className="nav-menu-btn" exact to="/">Home</NavLink></li>
          <li><NavLink className="nav-menu-btn" to="/actors">Best Actors</NavLink></li>
          <li><NavLink className="nav-menu-btn" to="/actress">Best Actress</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
