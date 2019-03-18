import React, { Component } from 'react';
import '../css/Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <h2 className="nav-logo">Oscars 2019</h2>
        <ul className="nav-menu">
          <li><a className="nav-menu-btn active" href="#home">Home</a></li>
          <li><a className="nav-menu-btn" href="#actors">Best Actors</a></li>
          <li><a className="nav-menu-btn" href="#actress">Best Actress</a></li>
          <li><a className="nav-menu-btn" href="#films">Best Films</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
