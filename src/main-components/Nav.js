import React from 'react';
import ReactLogo from '../images/Logo.svg';

function Nav() {
    return (
      <nav>
        <ul>
          <li><a href="#"><img src={ReactLogo} alt="React Logo" /></a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    );
  }

  export default Nav;